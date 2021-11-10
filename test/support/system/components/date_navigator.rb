class DateNavigatorComponent < ComponentUnderTest
  class << self
    def clicks_on_future_date
      hovered_date = nil
      within("date-navigator") do
        some_place_in_the_future = all('.change-counts', visible: :all)[2]
        x = some_place_in_the_future.rect.x.to_i
        y = 20
        find(".mouse-catcher").click(x: x, y: y)

        hovered_date = find(".cursor-date", visible: :all).text
        raise unless hovered_date.present?
      end
      return hovered_date
    end

    def hover_on(selector)
      within("date-navigator") do
        sleep(2)
        find(selector, visible: :all).hover
      end
    end

    def input_value
      within("date-navigator") do
        find("input").value
      end
    end

    def enters_future_date
      within("date-navigator") do
        find("input").click
      end

      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-next-month", visible: :all).click
      find(".open .flatpickr-day", text: "17").click

      within("date-navigator") do
        find("input").value
      end
    end

    def date_cursor
      element = nil
      within("date-navigator") do
        element = find(".cursor-date", visible: :all)
      end
      DateCursor.new(element)
    end
  end

  class DateCursor
    def initialize(element)
      @element = element
    end

    def date
      @element.text
    end
  end
end
