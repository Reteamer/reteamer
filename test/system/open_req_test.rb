require "application_system_test_case"

class OpenReqTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = FactoryBot.create(:user, :subscribed, :admin)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "Creating an Open Req" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_open_req("Cunning Engineer")

    within(".team-node", text: "General Electric") do
      assert_selector(".person-node", text: "Cunning Engineer")
    end
  end

  test "deactivating an open req" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_open_req("Cunning Engineer")

    deactivated_open_req_title = "Cunning Engineer"

    AccountLeader.deactivate_open_req(deactivated_open_req_title)
    assert(TeamChartComponent.has_no_open_req?(deactivated_open_req_title))
  end
end
