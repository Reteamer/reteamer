require_relative "component_under_test"

class EffectiveDateFields < ComponentUnderTest
  class << self
    def visit_effective_date_fields_style_guide
      visit effective_date_fields_path
    end

    def select_custom_date
      within("#change-supervisor-effective-date-modal") do
        find("input[type='radio'][value='other']").click
        find("input#other_effective_date").click
      end

      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-day", text: "17").click

      within("#change-supervisor-effective-date-modal") do
        value = find("input#other_effective_date").value
        find("button", text: "Commit").click
        value
      end
    end
  end
end
