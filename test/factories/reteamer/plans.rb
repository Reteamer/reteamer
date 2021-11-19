# == Schema Information
#
# Table name: reteamer_plans
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime
#  account_id :integer          not null
#
FactoryBot.define do
  factory :reteamer_plan, class: "Reteamer::Plan" do
    name { "MyString" }
    account_id { "" }
  end
end
