require "application_system_test_case"

class DateNavigatorTest < ApplicationSystemTestCase
  test "The date navigator is initialized correctly" do
    AccountLeader.visit_date_navigator_style_guide
    assert_equal(DateNavigatorComponent.input_value, Date.today.iso8601)
    assert(Page.query_string.has_no_date?)
    AccountLeader.hover_on(".today-marker")
    assert_equal(DateNavigatorComponent.date_cursor.date, Date.today.iso8601)
    AccountLeader.hover_on(".selected-date-marker")
    assert_equal(DateNavigatorComponent.date_cursor.date, Date.today.iso8601)
  end

  def assert_external_components_are_updated(hovered_date)
    assert_selector("#selected_date", text: hovered_date)
  end

  test "Using the slider" do
    AccountLeader.visit_date_navigator_style_guide
    future_date = AccountLeader.clicks_weeks_in_future(2)

    assert_equal(DateNavigatorComponent.input_value, future_date)
    assert_external_components_are_updated(future_date)
  end

  test "Using the input" do
    AccountLeader.visit_date_navigator_style_guide
    future_date = AccountLeader.enters_future_date
    AccountLeader.hover_on(".selected-date-marker")

    assert_equal(DateNavigatorComponent.date_cursor.date, future_date)
    assert_external_components_are_updated(future_date)
  end
end
