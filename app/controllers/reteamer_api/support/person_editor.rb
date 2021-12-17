module ReteamerApi
  module Support
    class PersonEditor
      def initialize(person_entry)
        @entry = person_entry
        @old_entry = Entry.find_for(person_entry.effective_at - 2.seconds, key: person_entry.key).first || Entry.new(versionable: People::Person.new)
      end

      def intentions
        intentions = %w[first_name last_name title employee_id email].map do |attribute|
          if @entry.versionable.attributes[attribute] != @old_entry.versionable.attributes[attribute]
            Intention.new(attribute, @old_entry.versionable.attributes[attribute], @entry.versionable.attributes[attribute])
          end
        end
        intentions.compact
      end

      def apply_intentions_going_forward
        memo = {}
        intentions.each do |intention|
          memo[intention.attribute_name] = intention.new_value
        end
        entries = Entry.where(key: @entry.key).where("effective_at > ?", @entry.effective_at)
        entries.each do |entry|
          cloned_entry = entry.deep_clone(include: :versionable)
          cloned_entry.versionable.assign_attributes(memo)
          cloned_entry.save
        end
      end

      class Intention
        attr_reader :attribute_name, :old_value, :new_value

        def initialize(attribute_name, old_value, new_value)
          @attribute_name = attribute_name
          @old_value = old_value
          @new_value = new_value
        end
      end
    end
  end
end
