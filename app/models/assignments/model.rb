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
module Assignments
  class Model < ApplicationRecord
    self.table_name = 'assignments'
    acts_as_tenant :account
    include MetaModel
  end

  private_constant :Model
end
