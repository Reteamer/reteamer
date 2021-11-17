# frozen_string_literal: true

# == Schema Information
#
# Table name: entries
#
#  id               :bigint           not null, primary key
#  active           :boolean          default(TRUE), not null
#  effective_at     :datetime         not null
#  key              :string           not null
#  plan_name        :string           default("main"), not null
#  versionable_type :string
#  created_at       :datetime
#  account_id       :integer          not null
#  versionable_id   :bigint
#
# Indexes
#
#  index_entries_on_versionable  (versionable_type,versionable_id)
#
class Entry < ApplicationRecord
  belongs_to :versionable, polymorphic: true
  belongs_to :plan
  acts_as_tenant :account

  before_create :set_values

  def set_values
    number_of_events = self.class.where(effective_at: effective_at.beginning_of_day..effective_at.end_of_day).count
    self.effective_at = effective_at.to_date + number_of_events.seconds
    self.key = SecureRandom.uuid unless key.present?
  end

  def self.histogram
    self.select("COUNT(*) AS value, effective_at::date AS date")
      .group("date")
      .order(:date)
  end

  def self.find_for(effective_date)
    where(effective_at:
      group(:key).where(effective_at: ..effective_date.end_of_day).select("max(effective_at) as effective_at"))
      .includes(:versionable) # avoid n+1 queries
  end

  def self.merge_conflicts(effective_date, key)
    where(effective_at:
      group_by_day(:effective_at).where(key: key, effective_at: effective_date.beginning_of_day..).select("max(effective_at) as effective_at"))
  end
end
