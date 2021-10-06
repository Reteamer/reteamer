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
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
require 'rails_helper'

RSpec.describe Entry, type: :model do
  describe "find_for" do
    it "returns only the most recent entries for a given date" do
      versionable = People::Person.create!(first_name: "Blueshirt", last_name: "Guy")
      first = Entry.create!(effective_at: 1.day.from_now, versionable: versionable.dup)
      third = Entry.create!(effective_at: 3.days.from_now, key: first.key, versionable: versionable.dup)
      second = Entry.create!(effective_at: 2.days.from_now, key: first.key, versionable: versionable.dup)

      entries = Entry.find_for(3.days.from_now.to_date)
      expect(entries).to match_array([third])
      entries = Entry.find_for(2.days.from_now.to_date)
      expect(entries).to match_array([second])
      entries = Entry.find_for(1.day.from_now.to_date)
      expect(entries).to match_array([first])
    end
  end
end
