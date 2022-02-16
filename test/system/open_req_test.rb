require "application_system_test_case"

class OpenReqTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = FactoryBot.create(:user, :subscribed, :admin)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "Creating an Open Req" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_open_req("Actor")

    within(".team-node", text: "General Electric") do
      assert_selector(".person-node", text: "Actor Job")
    end

    AccountLeader.visit_org_chart
    assert_selector(".person-node", text: "Actor Job")
    find("i[title='Compact-Expand']").click
    sleep(1)
    page.percy_snapshot("Jack has an open req")
  end

  test "deactivating an open req" do
    AccountLeader.visit_team_chart
    AccountLeader.make_new_open_req("Actor Job")

    deactivated_open_req_title = "Actor Job"

    AccountLeader.deactivate_open_req(deactivated_open_req_title)
    assert(TeamChartComponent.has_no_open_req?(deactivated_open_req_title))
  end
end
