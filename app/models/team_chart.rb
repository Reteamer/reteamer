# frozen_string_literal: true

class TeamChart
  def self.find_for(effective_date)
    teams = Entry.find_for(effective_date).where(versionable_type: Team.name).select(&:active).map do |team_entry|
      AssignedTeam.new(team_entry)
    end

    people = Entry.find_for(effective_date).where(versionable_type: People::Person.name).select(&:active)
    assignments = Entry.find_for(effective_date).where(versionable_type: Assignment.name).select(&:active).map(&:versionable)
    assignments.each do |assignment|
      assignee = people.find { |p| p.key == assignment.person_key }
      assigned_team = teams.find { |t| t.key == assignment.team_key }
      assigned_team.members << Assignee.new(assignee, assigned_team) if assignee && assigned_team
    end
    teams
  end

  class Assignee
    def name
      @assignee_entry.versionable.name
    end

    def key
      @assignee_entry.key
    end

    def title
      @assignee_entry.versionable.title
    end

    def image_url
      @assignee_entry.versionable.image_url
    end

    def contractor?
      @assignee_entry.versionable.contractor?
    end

    def employee_id
      @assignee_entry.versionable.employee_id
    end

    def team_key
      @assigned_team.key
    end

    def initialize(assignee_entry, assigned_team)
      @assignee_entry = assignee_entry
      @assigned_team = assigned_team
    end
  end

  class AssignedTeam
    attr_reader :members

    def name
      @team_entry.versionable.name
    end

    def key
      @team_entry.key
    end

    def parent_key
      @team_entry.versionable.parent_key
    end

    def initialize(team_entry)
      @team_entry = team_entry
      @members = []
    end
  end
end
