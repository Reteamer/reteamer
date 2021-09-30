# == Schema Information
#
# Table name: people
#
#  id                  :bigint           not null, primary key
#  active              :boolean          default(TRUE), not null
#  contractor          :boolean          default(FALSE), not null
#  effective_at        :datetime         not null
#  email               :string
#  first_name          :string
#  image_url           :text
#  last_name           :string
#  title               :string
#  created_at          :datetime
#  employee_id         :string
#  proto_id            :string           not null
#  supervisor_proto_id :string
#
module People
  # --- Private ActiveRecord model
  class Model < ApplicationRecord
    self.table_name = 'people'
    include MetaModel

    scope :roots, -> { where(supervisor_id: nil) }
  end
  private_constant :Model
end
