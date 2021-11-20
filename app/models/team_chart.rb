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
      assigned_team.members << Assignee.new(assignee, assignment) if assignee && assigned_team
    end
    fake_root_node = FakeRootNode.new
    teams.select { |team| team.parent_key.nil? }.map { |team| team.parent_key = fake_root_node.key }
    teams << fake_root_node
    teams
  end

  class AssignedTeam
    attr_reader :members
    attr_writer :parent_key

    def name
      @team_entry.versionable.name
    end

    def key
      @team_entry.key
    end

    def parent_key
      @parent_key || @team_entry.versionable.parent_key
    end

    def initialize(team_entry)
      @team_entry = team_entry
      @members = []
    end
  end

  class Assignee
    delegate :name, :title, :image_url, :employee_id, :type, to: :@person

    def key
      @person.key
    end

    def assignment_key
      @assignment_entry.key
    end

    def initialize(person_entry, assignment_entry)
      @person = person_entry.versionable
      @assignment_entry = assignment_entry
    end
  end

  class FakeRootNode
    def members
      []
    end

    def key
      "fake_root_node_key"
    end

    def name
      ActsAsTenant.current_tenant.name
    end

    def parent_key
      nil
    end
  end
end
