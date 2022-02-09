# frozen_string_literal: true

class TeamChart
  FAKE_ROOT_NODE_KEY = "fake_root_node_key"

  def self.find_for(effective_date)
    teams = Entry.find_for(effective_date, versionable_type: Team.name).map do |team_entry|
      AssignedTeam.new(team_entry)
    end

    people = Entry.find_for(effective_date, versionable_type: People::Person.name)
    assignments = Entry.find_for(effective_date, versionable_type: Assignment.name).map(&:versionable)
    assignee_keys = []
    assignments.each do |assignment|
      assignee = people.find { |p| p.key == assignment.person_key }
      assignee_keys << assignee&.key
      assigned_team = teams.find { |t| t.key == assignment.team_key }
      assigned_team.members << Assignee.new(assignee, assignment.key) if assignee && assigned_team
    end
    fake_root_node = FakeRootNode.new
    team_keys = teams.map(&:key)
    teams.select { |team| !team_keys.include?(team.parent_key) }.map { |team| team.parent_key = fake_root_node.key }
    teams << fake_root_node

    unassigned_entries = people.select { |p| !assignee_keys.include?(p.key) }
    unassignees = unassigned_entries.map { |entry| Assignee.new(entry, "unassigned") }
    unassigned_team = UnassignedTeam.new(unassignees)
    teams << unassigned_team

    teams
  end

  class AssignedTeam
    attr_reader :members
    attr_writer :parent_key

    def name
      @team_entry.versionable.name
    end

    def type
      "normal"
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
    delegate :key, :name, :first_name, :last_name, :title, :image_url, :employee_id, :type, :job_family_key, :supervisor_key, to: :@person
    attr_reader :assignment_key

    def initialize(person_entry, assignment_key)
      @person = person_entry.versionable
      @assignment_key = assignment_key
    end
  end

  class FakeRootNode
    def members
      []
    end

    def key
      FAKE_ROOT_NODE_KEY
    end

    def type
      "fake-root-node"
    end

    def name
      ActsAsTenant.current_tenant.name
    end

    def parent_key
      nil
    end
  end

  class UnassignedTeam
    attr_reader :members

    def initialize(members = [])
      @members = members
    end

    def key
      nil
    end

    def type
      "unassigned"
    end

    def name
      "Unassigned People"
    end

    def parent_key
      FAKE_ROOT_NODE_KEY
    end
  end
end
