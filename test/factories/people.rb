# == Schema Information
#
# Table name: people
#
#  id             :bigint           not null, primary key
#  email          :string
#  first_name     :string
#  image_url      :text
#  job_family_key :string
#  last_name      :string
#  supervisor_key :string
#  title          :string
#  type           :string
#  created_at     :datetime
#  account_id     :integer          not null
#  employee_id    :string
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
