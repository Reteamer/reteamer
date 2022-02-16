# frozen_string_literal: true

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
class Entry < ApplicationRecord
  belongs_to :versionable, polymorphic: true
  acts_as_tenant :account
  acts_as_proposable :proposal

  before_validation :set_values, on: :create

  validates_associated :versionable
  validates_uniqueness_to_tenant :effective_at

  def set_values
    max_effective_at = ActsAsProposable.without_proposal do
      self.class.where(effective_at: effective_at.beginning_of_day..effective_at.end_of_day).maximum(:effective_at) || effective_at.beginning_of_day
    end
    self.effective_at = max_effective_at + 1.second
    self.key = SecureRandom.uuid unless key.present?
  end

  def self.histogram
    self.select("COUNT(*) AS value, effective_at::date AS date")
      .group("date")
      .order(:date)
  end

  def self.find_for(effective_date, key: nil, versionable_type: nil, include_inactive: false, where: nil)
    sub_query = group(:key)
      .where(effective_at: ..effective_date.end_of_day)
      .select("max(effective_at) as effective_at")
    sub_query = sub_query.where(key: key) if key

    relation = where(effective_at: sub_query).includes(:versionable) # avoid n+1 queries
    relation = relation.where(key: key) if key
    relation = relation.where(versionable_type: versionable_type) if versionable_type
    relation = relation.where(where) if where
    relation = relation.select(&:active) unless include_inactive
    relation
  end

  def self.merge_conflicts(effective_date, key)
    where(effective_at:
      group_by_day(:effective_at).where(key: key, effective_at: effective_date.beginning_of_day..).select("max(effective_at) as effective_at"))
  end

  def mark_inactive
    self.active = false
    self
  end
end
