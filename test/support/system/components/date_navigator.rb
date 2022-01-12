require_relative "component_under_test"

class DateNavigatorComponent < ComponentUnderTest
  class << self
    def visit_date_navigator_style_guide
      visit simple_date_navigator_path
    end

    def clicks_weeks_in_future(weeks)
      within("simple-date-navigator") do
        weeks.times do
          find("#next-week").click
          sleep(0.1)
        end
        find("input#effective-date", visible: :all).value
      end
    end

    def enters_future_date_using_input
      within("simple-date-navigator") do
        find("input").click # here we want the "visible" input that's used to present a human readable date
      end

      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-day", text: "17").click

      within("simple-date-navigator") do
        find("input#effective-date", visible: :all).value
      end
    end

    def selected_date
      within("simple-date-navigator") do
        find("input#effective-date", visible: :all).value
      end
    end

    def assert_expected_date(expected_date)
      within("simple-date-navigator") do
        assert_selector("input#effective-date[value='#{expected_date}']", visible: :all)
      end
    end
  end
end
