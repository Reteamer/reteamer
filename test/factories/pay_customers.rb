FactoryBot.define do
  factory :pay_customer, class: Pay::Customer do
    processor { "stripe" }
    processor_id { "cus_ABC1234" }
    default { true }

    trait :subscribed do
      subscriptions { [FactoryBot.build(:pay_subscription, customer: instance)] }
    end
  end
end
