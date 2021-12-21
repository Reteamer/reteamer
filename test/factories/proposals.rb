# == Schema Information
#
# Table name: proposals
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime
#  account_id :integer          not null
#
FactoryBot.define do
  factory :proposal do
    name { "MyString" }
    account_id { "" }
  end
end
