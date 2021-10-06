# == Schema Information
#
# Table name: assignments
#
#  id           :bigint           not null, primary key
#  person_key   :string           not null
#  role_on_team :string
#  team_key     :string           not null
#  created_at   :datetime
#  account_id   :integer          not null
#
class Assignment < ApplicationRecord
  has_one :entry, as: :versionable
  delegate :key, to: :entry
  acts_as_tenant :account
end
