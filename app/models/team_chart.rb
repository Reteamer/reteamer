class TeamChart
  def self.find_for(effective_date)
    teams = Teams::Team.find_for(effective_date).map{|t| AssignedTeam.new(t)}
    people = Entry.find_for(effective_date).where(versionable_type: "People::Person").map(&:versionable)
    assignments = Assignments::Assignment.find_for(effective_date)

    assignments.each do |assignment|
      assignee = people.find{|p| p.proto_id == assignment.person_key}
      assigned_team = teams.find{|t| t.proto_id == assignment.team_id}
      if(assignee && assigned_team)
        assigned_team.members << Assignee.new(assignee, assigned_team)
      end
    end

    return teams
  end

  def self.histogram
    people_changes = People::Person.histogram
    team_changes = Teams::Team.histogram
    team_changes.each do |team_change|
      change = people_changes.find{ |c| c[:date] == team_change[:date] }
      if change
        change[:value] = change[:value] + team_change[:value]
      else
        people_changes << team_change
      end
    end
    people_changes
  end

  class Assignee
    attr_reader :assignee, :assigned_team
    def name
      assignee&.name
    end

    def initialize(assignee, assigned_team)
      @assignee = assignee
      @assigned_team = assigned_team
    end
  end

  class AssignedTeam
    attr_reader :team, :members

    def name
      team&.name
    end

    def proto_id
      team&.proto_id
    end

    def parent_proto_id
      team&.parent_proto_id
    end

    def initialize(team)
      @team = team
      @members = []
    end
  end
end
