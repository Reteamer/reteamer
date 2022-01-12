require "application_system_test_case"

class DateNavigatorTest < ApplicationSystemTestCase
  test "The date navigator is initialized correctly" do
    AccountLeader.visit_date_navigator_style_guide
    assert_equal(Date.today.iso8601, DateNavigatorComponent.selected_date)
    assert(Page.query_string.has_no_date?)
  end

  def assert_external_components_are_updated(expected_date)
    assert_selector("#selected_date", text: Date.parse(expected_date).iso8601)
  end

  def assert_external_components_are_not_updated(expected_date)
    assert_no_selector("#selected_date", text: Date.parse(expected_date).iso8601)
  end

  test "Using the buttons" do
    AccountLeader.visit_date_navigator_style_guide
    future_date = AccountLeader.clicks_weeks_in_future(2)
    assert(Date.parse(future_date) > Date.today)
    assert_external_components_are_updated(future_date)
  end

  test "Using the input" do
    AccountLeader.visit_date_navigator_style_guide
    future_date = AccountLeader.enters_future_date_using_input
    assert(Date.parse(future_date) > Date.today)
    assert_external_components_are_updated(future_date)
  end

  test "The date gets set from external events" do
    AccountLeader.visit_date_navigator_style_guide
    find("button", text: "Simulate external date picked event").click
    assert(Date.parse(DateNavigatorComponent.selected_date) > Date.today)
    assert_external_components_are_not_updated(DateNavigatorComponent.selected_date)
  end
end
