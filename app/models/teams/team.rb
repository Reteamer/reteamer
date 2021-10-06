# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  parent_key :string
#  created_at :datetime
#  account_id :integer          not null
#
module Teams
  class Team < ApplicationRecord
    has_one :entry, as: :versionable
    delegate :key, to: :entry
    acts_as_tenant :account
  end
end
