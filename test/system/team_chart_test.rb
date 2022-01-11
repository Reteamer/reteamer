require "application_system_test_case"

class TeamChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = FactoryBot.create(:user, :subscribed, :admin)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "Changing a person's team" do
    AccountLeader.visit_team_chart

    AccountLeader.drag_team_member("Jonathan").to("GE")
    new_date = AccountLeader.select_custom_date("#change-assignment-effective-date-modal")
    assert_equal(DateNavigatorComponent.selected_date, new_date)

    within(".team-node", text: "GE") do
      assert_selector(".person-node", text: "Jonathan")
    end
  end

  test "Moving someone from the beach to a team and back" do
    AccountLeader.visit_team_chart
    AccountLeader.clicks_weeks_in_future(5)

    within(".team-node", text: "Unassigned") do
      assert_selector(".person-node", text: "Lenny Wosniak")
    end

    AccountLeader.drag_team_member("Lenny Wosniak").to("General Electric")
    AccountLeader.select_selected_date("#change-assignment-effective-date-modal")

    within(".team-node", text: "General Electric") do
      assert_selector(".person-node", text: "Lenny Wosniak")
    end

    AccountLeader.drag_team_member("Lenny Wosniak").to("Unassigned")
    AccountLeader.select_custom_date("#change-assignment-effective-date-modal")

    within(".team-node", text: "Unassigned") do
      assert_selector(".person-node", text: "Lenny Wosniak")
    end
  end

  test "Changing a team's parent team" do
    AccountLeader.visit_team_chart
    AccountLeader.drag_team("Actors").to("General Electric")
    new_date = AccountLeader.select_custom_date("#change-team-parent-effective-date-modal")
    assert_equal(DateNavigatorComponent.selected_date, new_date)

    page.percy_snapshot("Actors should be a direct subteam of GE")
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
