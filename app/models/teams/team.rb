# == Schema Information
#
# Table name: teams
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  effective_at    :datetime         not null
#  name            :string           not null
#  created_at      :datetime
#  account_id      :integer          not null
#  parent_proto_id :string
#  proto_id        :string           not null
#
module Teams
  class Team < ApplicationRecord
    acts_as_tenant :account
    include MetaModel
    has_one :entry, as: :versionable


    def self.create_with_date(effective_date, attributes)
      model = new(attributes)
      ApplicationRecord.transaction do
        model.meta = Meta.new_prototype(effective_date, self)
        model.save
      end
      model
    end

    def update_with_date(effective_date, attributes)
      new_attributes = {
        name: attributes.fetch(:name, name),
        parent_proto_id: attributes.fetch(:parent_proto_id, parent_proto_id),
        active: attributes.fetch(:active, active)
      }
      new_model = self.class.new(new_attributes)

      ApplicationRecord.transaction do
        new_model.meta = Meta.update_prototype(proto_id, effective_date, self.class)
        new_model.save
      end

      new_model
    end

    def self.histogram
      self.select('COUNT(*) AS value, effective_at::date AS date')
          .group('date')
          .order(:date)
          .map { |team| { date: team.date, value: team.value } }
    end
  end
end
