require "application_system_test_case"

class DateNavigatorTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  teardown do
    logout
  end

  test "The date navigator is initialized correctly" do
    AccountLeader.visit_org_chart
    assert_equal(DateNavigatorComponent.input_value, Date.today.iso8601)
    assert(Page.query_string.has_no_date?)
    AccountLeader.hover_on(".today-marker")
    assert_equal(DateNavigatorComponent.date_cursor.date, Date.today.iso8601)
    AccountLeader.hover_on(".selected-date-marker")
    assert_equal(DateNavigatorComponent.date_cursor.date, Date.today.iso8601)
  end

  def assert_external_components_are_updated(hovered_date)
    assert(Page.query_string.has_date?(hovered_date))
    assert_selector(*OrgChartComponent.future_people_selector)
  end

  test "Using the slider" do
    AccountLeader.visit_org_chart
    assert_no_selector(*OrgChartComponent.future_people_selector)

    future_date = AccountLeader.clicks_on_future_date

    assert_equal(DateNavigatorComponent.input_value, future_date)
    assert_external_components_are_updated(future_date)
  end

  test "Using the input" do
    AccountLeader.visit_org_chart
    assert_no_selector(*OrgChartComponent.future_people_selector)

    future_date = AccountLeader.enters_future_date

    AccountLeader.hover_on(".selected-date-marker")
    assert_equal(DateNavigatorComponent.date_cursor.date, future_date)

    assert_external_components_are_updated(future_date)
  end

  #TODO: test "can navigate with url"

end
