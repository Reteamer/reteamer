require "application_system_test_case"

class OrgChartTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = FactoryBot.create(:user, :subscribed, :admin)
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
    new_date = AccountLeader.select_custom_date("#change-supervisor-effective-date-modal")
    DateNavigatorComponent.assert_expected_date(new_date)
    sleep(1)
    page.percy_snapshot("Jonathan should report to Pete")
  end
end
