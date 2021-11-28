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
#  proposal_id      :bigint           not null
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
FactoryBot.define do
  factory :entry, class: Entry do
    effective_at { Date.today }

    factory :person_entry do
      transient do
        supervisor_keyzz { "" }
      end

      versionable do
        association(:person, supervisor_key: supervisor_keyzz)
      end
    end
  end
end
