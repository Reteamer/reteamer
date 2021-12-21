FactoryBot.define do
  factory :pay_subscription, class: Pay::Subscription do
    name { "default" }
    processor_id { "sub_1" }
    processor_plan { "default" }
    quantity { 1 }
    status { "active" }
  end
end
