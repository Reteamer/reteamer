class TeamChart
  def self.find_for(effective_date)
    teams = Teams::Team.find_for(effective_date)
    people = People::Person.find_for(effective_date)
    assignments = Assignments::Assignment.find_for(effective_date)

    chart = assignments.reduce([]) do |memo, assignment|
      assignee = people.find{|p| p.id == assignment.person_id}
      assigned_team = teams.find{|t| t.id == assignment.team_id}
      if(assignee && assigned_team)
        memo << Assignee.new(assignee, assigned_team)
      end
    end

    return chart + teams
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
end
