# == Schema Information
#
# Table name: open_reqs
#
#  id             :bigint           not null, primary key
#  supervisor_key :string
#  title          :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  account_id     :integer          not null
#
require 'rails_helper'

RSpec.describe People::OpenReq, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
