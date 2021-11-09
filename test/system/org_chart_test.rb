require "application_system_test_case"

class OrgChartTest < ApplicationSystemTestCase
  test "can navigate with date input" do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)

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
  # test "can navigate with date navigator"
  # test "can navigate with url"
end
