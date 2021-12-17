FactoryBot.define do
  factory :person, class: People::Employee do
    first_name { "Jane" }
    last_name { "Doe" }
    title { "Test Specialist" }
    employee_id { "ABC-333" }
    email { "jane.doe@example.com" }
  end
end
