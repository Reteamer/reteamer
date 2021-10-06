# frozen_string_literal: true

class TeamChart
  def self.find_for(effective_date)
    teams = Entry.find_for(effective_date).where(versionable_type: Teams::Team.name).select(&:active).map do |t|
      AssignedTeam.new(t.versionable)
    end
    people = Entry.find_for(effective_date).where(versionable_type: People::Person.name).select(&:active).map(&:versionable)
    assignments = Entry.find_for(effective_date).where(versionable_type: Assignments::Assignment.name).select(&:active).map(&:versionable)
    assignments.each do |assignment|
      assignee = people.find { |p| p.key == assignment.person_key }
      assigned_team = teams.find { |t| t.key == assignment.team_key }
      assigned_team.members << Assignee.new(assignee, assigned_team) if assignee && assigned_team
    end

    teams
  end

  class Assignee
    attr_reader :assignee, :assigned_team

    def name
      assignee.name
    end

    def initialize(assignee, assigned_team)
      @assignee = assignee
      @assigned_team = assigned_team
    end
  end

  class AssignedTeam
    attr_reader :team, :members

    def name
      team.name
    end

    def key
      team.key
    end

    def parent_key
      team.parent_key
    end

    def initialize(team)
      @team = team
      @members = []
    end
  end
end
