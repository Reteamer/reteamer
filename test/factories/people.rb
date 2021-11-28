FactoryBot.define do
  factory :person, class: People::Employee do
    first_name { "Jane" }
    last_name { "Doe" }
  end
end
