require "application_system_test_case"

class TeamChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "Changing a person's team" do
    AccountLeader.visit_team_chart
    AccountLeader.drag_team_member("Cerie Xerox").to("Actors")
    new_date = AccountLeader.select_custom_date
    assert_equal(DateNavigatorComponent.selected_date, new_date)

    # TODO: assert Cerie is now on the Actors team. Maybe through snapshot comparisons?
  end

  test "creating a new team" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_team("The A Team")
    assert(TeamChartComponent.has_team?("The A Team"))
  end

  test "creating a new person" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_person("Marky")
    assert(TeamChartComponent.has_person?("Marky"))
  end

  test "editing an existing person" do
    AccountLeader.visit_team_chart
    assert(TeamChartComponent.has_person?("Jonathan"))
    AccountLeader.edit_person("Jonathan", "Bonathan")
    assert(TeamChartComponent.has_person?("Bonathan"))
  end

  test "editing an existing team" do
    AccountLeader.visit_team_chart
    assert(TeamChartComponent.has_team?("General Electric"))
    AccountLeader.edit_team("General Electric", "Specific Electric")
    assert(TeamChartComponent.has_team?("Specific Electric"))
  end

  test "deactivating a team" do
    deactivated_team_name = "General Electric"
    subteam_name = "East Coast Television and Microwave Oven Programming"

    AccountLeader.visit_team_chart
    AccountLeader.deactivate_team(deactivated_team_name)
    assert(TeamChartComponent.has_team?(subteam_name))
    assert(TeamChartComponent.has_no_team?(deactivated_team_name))
  end
end
