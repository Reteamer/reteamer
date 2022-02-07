class JobFamily < ApplicationRecord
  has_one :entry, as: :versionable
  delegate :key, to: :entry

  acts_as_tenant :account
  validates_uniqueness_to_tenant :name
end
