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

    def edit_person(person_name, new_name)
      person_node = find(".person-node", text: person_name)
      person_node.hover

      within(person_node) do
        find(".edit-person").click
      end

      within("#person-form", visible: :all) do
        click_on("Next")
        fill_in("first_name", with: new_name)
        click_on("Submit")
      end
    end
  end
end
