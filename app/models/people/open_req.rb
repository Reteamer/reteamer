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
module People
  class OpenReq < ApplicationRecord
    has_one :entry, as: :versionable
    delegate :key, to: :entry
    acts_as_tenant :account
    has_person_name
  end
end
