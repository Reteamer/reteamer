require "test_helper"

class PersonDeactivatorTest < ActiveSupport::TestCase
  test "It deactivates the person at the effective date" do
    yesterday = Date.yesterday
    today = Date.today
    person_entry = FactoryBot.create(:person_entry, active: true, effective_at: yesterday)
    ReteamerApi::Support::PersonDeactivator.deactivate(person_entry.key, today)
    new_entry = Entry.find_for(today, key: person_entry.key, include_inactive: true).first
    refute(new_entry.active)
    assert_equal(new_entry.effective_at.to_date, today)
  end

  test "It makes a copy of the People::Person in the process because we want a 1:1 ratio of Entries to versionables" do
    today = Date.today
    person_entry = FactoryBot.create(:person_entry, active: true)
    people_count_before = People::Person.count
    ReteamerApi::Support::PersonDeactivator.deactivate(person_entry.key, today)
    people_count_after = People::Person.count
    assert_equal(people_count_after - people_count_before, 1)
  end

  test "It deactivates any future entries for that person" do
    today = Date.today
    key = "some-key"
    _active_person_entry = FactoryBot.create(:person_entry, key: key, active: true, effective_at: today)
    the_future = 3.days.from_now.to_date
    _future_person_entry = FactoryBot.create(:person_entry, key: key, active: true, effective_at: the_future)

    people_count_before = People::Person.count
    ReteamerApi::Support::PersonDeactivator.deactivate(key, today)
    people_count_after = People::Person.count

    refute(Entry.find_for(today, key: key, include_inactive: true).first.active)
    new_future_entry = Entry.find_for(the_future, key: key, include_inactive: true).first
    assert_equal(new_future_entry.active, false)
    assert_equal(new_future_entry.effective_at.to_date, the_future)
    assert_equal(2, people_count_after - people_count_before)
  end

  test "It reassigns all the subordinates to their grand-boss" do
    yesterday = Date.yesterday
    today = Date.today
    the_future = 3.days.from_now.to_date
    grand_boss = FactoryBot.create(:person_entry, effective_at: yesterday, key: "grand-boss-key")
    boss = FactoryBot.create(:person_entry, effective_at: yesterday, supervisor_keyzz: grand_boss.key, key: "boss-key")
    orphaned_subordinate = FactoryBot.create(:person_entry, effective_at: yesterday, supervisor_keyzz: boss.key)
    _future_orphaned_subordinate = FactoryBot.create(:person_entry, key: orphaned_subordinate.key, effective_at: the_future, supervisor_keyzz: boss.key)

    people_count_before = People::Person.count
    entry_count_before = Entry.count
    ReteamerApi::Support::PersonDeactivator.deactivate(boss.key, today)
    entry_count_after = Entry.count
    people_count_after = People::Person.count

    new_orphan_entry = Entry.find_for(today, key: orphaned_subordinate.key).first
    assert_equal(grand_boss.key, new_orphan_entry.versionable.supervisor_key)
    assert_equal(today, new_orphan_entry.effective_at.to_date)
    new_future_orphan_entry = Entry.find_for(the_future, key: orphaned_subordinate.key).first
    assert_equal(grand_boss.key, new_future_orphan_entry.versionable.supervisor_key)
    assert_equal(the_future, new_future_orphan_entry.effective_at.to_date)

    assert_equal(3, people_count_after - people_count_before)
    assert_equal(3, entry_count_after - entry_count_before)
  end
end
