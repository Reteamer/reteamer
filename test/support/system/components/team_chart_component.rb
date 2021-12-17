require_relative "component_under_test"

class TeamChartComponent < ComponentUnderTest
  class << self
    def visit_team_chart
      visit team_chart_path
      wait_till_page_is_loaded
    end

    def future_people_selector
      ["text", text: "Howard Jorgensen"]
    end

    def drag_team_member(person_name)
      dragging_element = find("g.person-node", text: person_name)
      dragging_element.hover
      Draggable.new(dragging_element)
    end

    def has_no_person?(person_name)
      has_no_selector?(".person-node", text: person_name)
    end

    def has_person?(person_name)
      has_selector?(".person-node", text: person_name)
    end

    def has_team?(team_name)
      has_selector?(".team-node .team-name", text: team_name)
    end

    def has_no_team?(team_name)
      has_no_selector?(".team-node .team-name", text: team_name)
    end

    def deactivate_team(team_name)
      team_node = find(".team-node", text: team_name)
      team_node.hover
      within(team_node) do
        find(".delete-team").click
      end

      within("#deactivate-team-effective-date-modal") do
        click_on("Commit")
      end
    end

    private

    def wait_till_page_is_loaded
      sleep(1)
      assert_selector("text", text: "Jack Donaghy", visible: true)
    end
  end

  class Draggable
    include Capybara::DSL

    def initialize(element)
      @element = element
    end

    def to(team_name)
      @element.drag_to(find("g.node", text: team_name))
    end
  end
end
