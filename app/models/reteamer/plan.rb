# == Schema Information
#
# Table name: reteamer_plans
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime
#  account_id :integer          not null
#
module Reteamer
  class Plan < ApplicationRecord
    acts_as_tenant :account
    validates_uniqueness_to_tenant :name

    MAIN_PLAN_NAME = "main"

    class << self
      def plan_names
        Plan.pluck(:plan_name).sort{|a,b| b == MAIN_PLAN_NAME ? 1 : a <=> b}
      end
    end
  end
end
