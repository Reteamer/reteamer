require "application_system_test_case"

class TeamChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  teardown do
    logout
  end

  test "Changing a person's team" do
    AccountLeader.visit_team_chart
    AccountLeader.drag_team_member("Cerie Xerox").to("Actors")
    new_date = AccountLeader.select_custom_date
    assert_equal(DateNavigatorComponent.selected_date, new_date)

    # TODO: assert Cerie is now on the Actors team. Maybe through snapshot comparisons?
  end
end
