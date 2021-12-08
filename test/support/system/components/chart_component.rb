require_relative "component_under_test"

class ChartComponent < ComponentUnderTest
  class << self
    def deactivate_person(person_name)
      person_node = find(".person-node", text: person_name)
      person_node.hover
      within(person_node) do
        find(".delete-person").click
      end

      within("#deactivate-person-effective-date-modal") do
        click_on("Commit")
      end
    end
  end
end
