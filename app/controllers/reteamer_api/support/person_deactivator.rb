module ReteamerApi
  module Support
    class PersonDeactivator
      class << self
        def deactivate(plan, key, effective_date)
          update_subordinates_to_report_to_grand_boss(plan, effective_date, key)
          deactivate_person_for_future(plan, effective_date, key)
          deactivate_person(plan, effective_date, key)
        end

        private

        def deactivate_person_for_future(plan, effective_date, key)
          future_entries = Entry.where(effective_at: effective_date.end_of_day.., key: key)
          future_entries.each do |entry|
            clone_entry = entry.deep_clone(include: :versionable)
            clone_entry.plan = plan
            clone_entry.mark_inactive.save
          end
        end

        def deactivate_person(plan, effective_date, key)
          person_entry = Entry.find_for(effective_date).where(key: key).first
          clone_entry = person_entry.deep_clone(include: :versionable)
          clone_entry.plan = plan
          clone_entry.effective_at = effective_date
          clone_entry.mark_inactive.save
        end

        def update_subordinates_to_report_to_grand_boss(plan, effective_date, key)
          person_entry = Entry.find_for(effective_date).where(versionable_type: People::Person.name, key: key).first
          subordinates = People::Person.where(supervisor_key: key)
            .includes(:entry)
            .where(entry: {effective_at: person_entry.effective_at..})

          subordinates.each do |subordinate|
            clone = subordinate.deep_clone(include: :entry)
            clone.supervisor_key = person_entry.versionable.supervisor_key
            clone.entry.plan = plan
            clone.entry.effective_at = clone.entry.effective_at < effective_date ? effective_date : clone.entry.effective_at
            clone.save
          end
        end
      end
    end
  end
end
