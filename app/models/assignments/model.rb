# == Schema Information
#
# Table name: assignments
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  effective_at    :datetime         not null
#  role_on_team    :string
#  created_at      :datetime
#  person_proto_id :string           not null
#  proto_id        :string           not null
#  team_proto_id   :string           not null
#
module Assignments
  class Model < ApplicationRecord
    self.table_name = 'assignments'
    include MetaModel
  end

  private_constant :Model
end
