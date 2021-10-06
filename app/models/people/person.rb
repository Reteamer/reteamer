# == Schema Information
#
# Table name: people_people
#
#  id             :bigint           not null, primary key
#  contractor     :boolean          default(FALSE), not null
#  email          :string
#  first_name     :string
#  image_url      :text
#  last_name      :string
#  supervisor_key :string
#  title          :string
#  created_at     :datetime
#  account_id     :integer          not null
#  employee_id    :string
#
module People
  class Person < ApplicationRecord
    has_one :entry, as: :versionable
    delegate :key, to: :entry
    acts_as_tenant :account
    has_person_name
  end
end
