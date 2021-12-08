require_relative "component_under_test"

class OrgChartComponent < ComponentUnderTest
  class << self
    def visit_org_chart
      visit org_chart_path
      assert_selector("text", text: "Jack Donaghy")
    end

    def future_people_selector
      ["text", text: "Howard Jorgensen"]
    end

    def drag_person(text)
      dragging_element = find("g.node", text: text)
      dragging_element.hover
      Draggable.new(dragging_element)
    end
  end

  class Draggable
    include Capybara::DSL

    def initialize(element)
      @element = element
    end

    def to(text)
      @element.drag_to(find("g.node", text: text))
    end
  end
end
