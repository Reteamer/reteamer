# == Schema Information
#
# Table name: entries
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  effective_at     :datetime         not null
#  key              :string           not null
#  plan_name        :string           default("main"), not null
#  versionable_type :string
#  created_at       :datetime
#  account_id       :integer          not null
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
require "test_helper"

class EntryTest < ActiveSupport::TestCase
  setup do
    ActsAsTenant.current_tenant = accounts(:company)
  end

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
end