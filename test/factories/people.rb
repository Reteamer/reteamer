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
FactoryBot.define do
  factory :person, class: People::Employee do
    first_name { "Jane" }
    last_name { "Doe" }
    title { "Test Specialist" }
    employee_id { "ABC-333" }
    email { "jane.doe@example.com" }
  end
end
