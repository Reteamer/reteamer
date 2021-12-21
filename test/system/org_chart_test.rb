require "application_system_test_case"

class OrgChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "editing an existing person" do
    AccountLeader.visit_team_chart
    assert(TeamChartComponent.has_person?("Jonathan"))
    AccountLeader.edit_person("Jonathan", "Bonathan")
    assert(TeamChartComponent.has_person?("Bonathan"))
  end

  test "Changing a person's supervisor" do
    AccountLeader.visit_org_chart
    AccountLeader.drag_person("Jonathan").to("Pete Hornberger")
    new_date = AccountLeader.select_custom_date
    assert_equal(DateNavigatorComponent.selected_date, new_date)

    # TODO: assert Jonathan now reports to Pete. Maybe through snapshot comparisons?
  end
end
