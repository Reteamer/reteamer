# == Schema Information
#
# Table name: connections
#
#  id                        :bigint           not null, primary key
#  active                    :boolean          default(TRUE), not null
#  effective_at              :datetime         not null
#  label                     :string
#  created_at                :datetime
#  other_supervisor_proto_id :string           not null
#  person_proto_id           :string           not null
#  proto_id                  :string           not null
#
module Connections
  class Model < ApplicationRecord
    self.table_name = 'connections'
    include MetaModel
  end

  private_constant :Model
end
