class EffectiveDateSelector < ComponentUnderTest
  class << self
    def select_custom_date
      within("#effective-date-selector") do
        find("input[type='radio'][value='other']").click
        find("input#other_effective_date").click
      end

      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-day", text: "17").click

      within("#effective-date-selector") do
        value = find("input#other_effective_date").value
        find("button", text: "Commit").click
        value
      end
    end
  end
end
