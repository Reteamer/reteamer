# == Schema Information
#
# Table name: proposals
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime
#  account_id :integer          not null
#
class Proposal < ApplicationRecord
  acts_as_tenant :account
  validates_uniqueness_to_tenant :name

  MAIN_PROPOSAL_NAME = "main"

  class << self
    def default_proposal
      find_by(name: MAIN_PROPOSAL_NAME)
    end

    def proposal_names
      pluck(:name).sort do |a, b|
        if a == MAIN_PROPOSAL_NAME
          -1
        elsif b == MAIN_PROPOSAL_NAME
          1
        else
          a.downcase <=> b.downcase
        end
      end
    end
  end
end
