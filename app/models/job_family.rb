# == Schema Information
#
# Table name: job_families
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime
#  account_id :integer          not null
#
class JobFamily < ApplicationRecord
  has_one :entry, as: :versionable
  delegate :key, to: :entry

  acts_as_tenant :account
  validates_uniqueness_to_tenant :name
end
