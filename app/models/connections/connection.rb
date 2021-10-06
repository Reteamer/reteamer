# == Schema Information
#
# Table name: connections
#
#  id                   :bigint           not null, primary key
#  label                :string
#  other_supervisor_key :string           not null
#  person_key           :string           not null
#  created_at           :datetime
#  account_id           :integer          not null
#
module Connections
  class Connection < ApplicationRecord
    has_one :entry, as: :versionable
    delegate :key, to: :entry
    acts_as_tenant :account
  end
end
