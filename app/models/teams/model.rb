# == Schema Information
#
# Table name: teams
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  effective_at    :datetime         not null
#  name            :string           not null
#  created_at      :datetime
#  parent_proto_id :string
#  proto_id        :string           not null
#
module Teams
  class Model < ApplicationRecord
    self.table_name = 'teams'
    include MetaModel
  end

  private_constant :Model
end
