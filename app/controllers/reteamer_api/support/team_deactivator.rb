module ReteamerApi
  module Support
    class TeamDeactivator
      class << self
        def deactivate(key, effective_date)
          update_subteams_to_report_to_grand_team(effective_date, key)
          deactivate_team_for_future(effective_date, key)
          deactivate_team(effective_date, key)
        end

        private

        def deactivate_team_for_future(effective_date, key)
          future_entries = Entry.where(effective_at: effective_date.end_of_day.., key: key)
          future_entries.each do |entry|
            clone_entry = entry.deep_clone(include: :versionable)
            clone_entry.mark_inactive.save
          end
        end

        def deactivate_team(effective_date, key)
          person_entry = Entry.find_for(effective_date, key: key).first
          clone_entry = person_entry.deep_clone(include: :versionable)
          clone_entry.effective_at = effective_date
          clone_entry.mark_inactive.save
        end

        def update_subteams_to_report_to_grand_team(effective_date, key)
          entry = Entry.find_for(effective_date, versionable_type: Team.name, key: key).first
          subordinates = Team.where(parent_key: key)
            .includes(:entry)
            .where(entry: {effective_at: entry.effective_at..})

          subordinates.each do |subordinate|
            clone = subordinate.deep_clone(include: :entry)
            clone.parent_key = entry.versionable.parent_key
            clone.entry.effective_at = clone.entry.effective_at < effective_date ? effective_date : clone.entry.effective_at
            clone.save
          end
        end
      end
    end
  end
end
