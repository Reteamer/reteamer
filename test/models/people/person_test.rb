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
#  job_family_id  :bigint
#
require "test_helper"

class PersonTest < ActiveSupport::TestCase
  def setup
    ActsAsTenant.current_tenant = accounts(:company)
  end

  test "has_subordinates? tells us if there are people reporting to this person now or in the future" do
    supervisor = FactoryBot.build(:person)
    effective_date = 1.day.from_now
    supervisor_entry = Entry.create!(effective_at: effective_date, versionable: supervisor)
    subordinate = FactoryBot.build(:person, supervisor_key: supervisor_entry.key)
    subordinate_entry = Entry.create!(effective_at: effective_date, versionable: subordinate)

    assert(People::Person.has_subordinates?(effective_date, supervisor_entry.key) == true)
    assert(People::Person.has_subordinates?(effective_date, subordinate_entry.key) == false)
  end

  test "image_url" do
    person = People::Person.new
    assert_equal(person.image_url, "https://secure.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e.png?default=mp&rating=pg&size=60")

    person = People::Person.new(image_url: "expected_url")
    assert_equal(person.image_url, "expected_url")

    person = People::Person.new(email: "will.read@gmail.com")
    assert_equal(person.image_url, "https://secure.gravatar.com/avatar/c4441c6faae71a7b1c035b85ed2c2701.png?default=mp&rating=pg&size=60")
  end
end
