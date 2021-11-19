# == Schema Information
#
# Table name: people
#
#  id             :bigint           not null, primary key
#  email          :string
#  first_name     :string
#  image_url      :text
#  last_name      :string
#  supervisor_key :string
#  title          :string
#  type           :string
#  created_at     :datetime
#  account_id     :integer          not null
#  employee_id    :string
#
require "test_helper"

class PersonTest < ActiveSupport::TestCase
  def setup
    ActsAsTenant.current_tenant = accounts(:company)
  end

  test "has_subordinates? tells us if there are people reporting to this person now or in the future" do
    supervisor = People::Person.new(first_name: "Blueshirt", last_name: "Guy")
    effective_date = 1.day.from_now
    supervisor_entry = Entry.create!(effective_at: effective_date, versionable: supervisor)
    subordinate = People::Person.new(first_name: "Greenshirt", last_name: "Guy", supervisor_key: supervisor_entry.key)
    subordinate_entry = Entry.create!(effective_at: effective_date, versionable: subordinate)

    assert(People::Person.has_subordinates?(effective_date, supervisor_entry.key) == true)
    assert(People::Person.has_subordinates?(effective_date, subordinate_entry.key) == false)
  end
end
