# == Schema Information
#
# Table name: accounts
#
#  id                 :bigint           not null, primary key
#  domain             :string
#  extra_billing_info :text
#  name               :string           not null
#  personal           :boolean          default(FALSE)
#  subdomain          :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  owner_id           :bigint
#
# Indexes
#
#  index_accounts_on_owner_id  (owner_id)
#
# Foreign Keys
#
#  fk_rails_...  (owner_id => users.id)
#
FactoryBot.define do
  factory :account do
    personal { false }
    name { "Business Account" }

    trait :subscribed do
      pay_customers { [FactoryBot.build(:pay_customer, :subscribed, owner: instance)] }
    end
  end
end
