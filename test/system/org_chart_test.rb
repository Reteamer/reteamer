require "application_system_test_case"

class OrgChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  teardown do
    logout
  end

  test "The date navigator is initialized correctly" do
    visit org_chart_path
    within("date-navigator") do
      assert_selector "input[value='#{Date.today.iso8601}']"

      assert_nil(URI.parse(current_url).query)

      sleep(2)
      find('.today-marker', visible: :all).hover
      assert_selector(".cursor-date", text: Date.today.iso8601, visible: :all)

      find('.selected-date-marker', visible: :all).hover
      selected_date = find(".cursor-date", visible: :all).text
      assert_equal(selected_date, Date.today.iso8601)
    end
  end

  test "Using the slider" do
    visit org_chart_path
    within("date-navigator") do
      some_place_in_the_future = all('.change-counts', visible: :all)[2]
      x = some_place_in_the_future.rect.x.to_i
      y = 20
      take_screenshot
      find(".mouse-catcher").click(x: x, y: y)
      hovered_date = find(".cursor-date", visible: :all).text
      assert_not_empty(hovered_date)
      assert_equal(find("input").value, hovered_date)
      assert_equal(URI.parse(current_url).query, "effective_date=#{hovered_date}")
    end
  end
  # test "can navigate with date navigator"
  # test "can navigate with url"
end
