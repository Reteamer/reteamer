module People
  class Person < ApplicationRecord
    include MetaModel
    acts_as_tenant :account
    has_person_name

    scope :roots, -> { where(supervisor_id: nil) }

    def self.create_with_date(effective_date, attributes)
      model = self.new(attributes)
      ApplicationRecord.transaction do
        model.meta = Meta.new_prototype(effective_date, self)
        model.save
      end
      return model
    end

    def update_with_date(effective_date, attributes)
      new_attributes = {
        employee_id: attributes.fetch(:employee_id, self.employee_id),
        first_name: attributes.fetch(:first_name, self.first_name),
        last_name: attributes.fetch(:last_name, self.last_name),
        title: attributes.fetch(:title, self.title),
        supervisor_proto_id: attributes.fetch(:supervisor_proto_id, self.supervisor_proto_id),
        active: attributes.fetch(:active, self.active),
        image_url: attributes.fetch(:image_url, self.image_url),
        contractor: attributes.fetch(:contractor, self.contractor)
      }
      new_model = self.class.new(new_attributes)

      ApplicationRecord.transaction do
        new_model.meta = Meta.update_prototype(self.proto_id, effective_date, self.class)
        new_model.save
      end

      return new_model
    end

    def self.any?(effective_date, person_proto_id)
      models = self.where(proto_id: person_proto_id).find_for(effective_date)
      models.present?
    end

    def self.histogram
      self.select('COUNT(*) AS value, effective_at::date AS date')
           .group('date')
           .order(:date)
    end
  end
end
