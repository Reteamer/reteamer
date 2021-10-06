# == Schema Information
#
# Table name: entries
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  effective_at     :datetime         not null
#  key              :string           not null
#  versionable_type :string
#  created_at       :datetime
#  account_id       :integer          not null
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
require 'rails_helper'

RSpec.describe Entry, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
