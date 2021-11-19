FactoryBot.define do
  factory :entry, class: Entry do
    effective_at { Date.today }

    factory :person_entry do
      transient do
        supervisor_keyzz { "" }
      end

      versionable do
        association(:person, supervisor_key: supervisor_keyzz)
      end
    end
  end

  factory :person, class: People::Employee do
    first_name { "Jane" }
    last_name { "Doe" }
  end
end
