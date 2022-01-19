FactoryBot.define do
  factory :pay_customer, class: Pay::Customer do
    processor { "fake_processor" }
    processor_id { "free" }
    default { true }

    trait :subscribed do
      subscriptions { [FactoryBot.build(:pay_subscription, customer: instance)] }
    end
  end
end
