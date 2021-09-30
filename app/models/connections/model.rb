# == Schema Information
#
# Table name: connections
#
#  id                        :bigint           not null, primary key
#  active                    :boolean          default(TRUE), not null
#  effective_at              :datetime         not null
#  label                     :string
#  created_at                :datetime
#  account_id                :integer          not null
#  other_supervisor_proto_id :string           not null
#  person_proto_id           :string           not null
#  proto_id                  :string           not null
#
module Connections
  class Model < ApplicationRecord
    self.table_name = 'connections'
    acts_as_tenant :account
    include MetaModel
  end

  private_constant :Model
end
