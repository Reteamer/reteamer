class TeamChartComponent < ComponentUnderTest
  class << self
    def visit_team_chart
      visit team_chart_path
      assert_selector("text", text: "Jack Donaghy")
    end

    def future_people_selector
      ["text", text: "Howard Jorgensen"]
    end

    def drag_team_member(person_name)
      dragging_element = find("g.person-node", text: person_name)
      dragging_element.hover
      Draggable.new(dragging_element)
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
