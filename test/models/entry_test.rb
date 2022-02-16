# == Schema Information
#
# Table name: entries
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  effective_at     :datetime         not null
#  key              :string           not null
#  versionable_type :string
#  created_at       :datetime
#  account_id       :integer          not null
#  proposal_id      :bigint           not null
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
require "test_helper"

class EntryTest < ActiveSupport::TestCase
  test ".find_for returns only the most recent entries for a given date" do
    versionable = People::Person.create!(first_name: "Blueshirt", last_name: "Guy")
    first = Entry.create!(effective_at: 1.day.from_now, versionable: versionable.dup)
    third = Entry.create!(effective_at: 3.days.from_now, key: first.key, versionable: versionable.dup)
    second = Entry.create!(effective_at: 2.days.from_now, key: first.key, versionable: versionable.dup)

    entries = Entry.find_for(3.days.from_now.to_date)
    assert(entries == [third])
    entries = Entry.find_for(2.days.from_now.to_date)
    assert(entries == [second])
    entries = Entry.find_for(1.day.from_now.to_date)
    assert(entries == [first])
  end

  test "merge_conflicts finds all instances of a key that happen in the future" do
    versionable = People::Person.create!(first_name: "Blueshirt", last_name: "Guy")
    first = Entry.create!(effective_at: 1.day.from_now, versionable: versionable.dup)
    _third = Entry.create!(effective_at: 3.days.from_now, key: first.key, versionable: versionable.dup)
    _second = Entry.create!(effective_at: 2.days.from_now, key: first.key, versionable: versionable.dup)
    _second_later = Entry.create!(effective_at: 2.days.from_now, key: first.key, versionable: versionable.dup)

    entries = Entry.merge_conflicts(1.day.from_now.to_date, first.key)
    assert(entries.count == 3)
    entries = Entry.merge_conflicts(2.days.from_now.to_date, first.key)
    assert(entries.count == 2)
  end

  test "#find_for does not return deactivated entries" do
    today = Date.today
    active = FactoryBot.create(:person_entry, active: true, effective_at: today)
    inactive = FactoryBot.create(:person_entry, active: false, effective_at: today)
    results = Entry.find_for(today)
    assert_includes(results, active)
    refute_includes(results, inactive)
  end

  test "#find_for lets you further scope the relation" do
    today = Date.today
    expected = FactoryBot.create(:person_entry, key: "expected")
    not_expected = FactoryBot.create(:person_entry, key: "unexpected")
    results = Entry.find_for(today, key: "expected")
    assert_includes(results, expected)
    refute_includes(results, not_expected)
  end

  test "effective_at should be in UTC starting around 00:00:00" do
    effective_at = Date.parse("2022-04-26") + 4.seconds
    assert_equal("UTC", effective_at.zone)

    entry = Entry.create(effective_at: effective_at)
    assert_equal("UTC", entry.effective_at.zone)
  end
end
