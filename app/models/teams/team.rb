module Teams
  class Team < ApplicationRecord
    acts_as_tenant :account
    include MetaModel

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

    def self.any?(effective_date, person_proto_id)
      models = where(proto_id: person_proto_id).find_for(effective_date)
      models.present?
    end

    def self.histogram
      self.select('COUNT(*) AS value, effective_at::date AS date')
          .group('date')
          .order(:date)
          .map { |team| { date: team.date, value: team.value } }
    end
  end
end
