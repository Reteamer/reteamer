# == Schema Information
#
# Table name: people
#
#  id             :bigint           not null, primary key
#  email          :string
#  first_name     :string
#  image_url      :text
#  last_name      :string
#  supervisor_key :string
#  title          :string
#  type           :string
#  created_at     :datetime
#  account_id     :integer          not null
#  employee_id    :string
#
module People
  class Person < ApplicationRecord
    has_one :entry, as: :versionable
    delegate :key, to: :entry
    acts_as_tenant :account
    has_person_name

    def self.has_subordinates?(effective_date, key)
      where(supervisor_key: key)
        .includes(:entry)
        .where(entry: {effective_at: effective_date.beginning_of_day..})
        .exists?
    end
  end
end
