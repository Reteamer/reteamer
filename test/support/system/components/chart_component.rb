require_relative "component_under_test"

class ChartComponent < ComponentUnderTest
  class << self
    def deactivate_person(person_name)
      find(".person-node", text: person_name).hover
      within(".person-node", text: person_name) do
        find(".delete-person").click
      end

      within("#deactivate-person-effective-date-modal") do
        click_on("Commit")
      end
    end
  end
end
