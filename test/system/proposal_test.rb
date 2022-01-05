require "application_system_test_case"

class ProposalTest < ApplicationSystemTestCase
  setup do
    thirty_rock_user = FactoryBot.create(:user, :subscribed, :admin)
    peopleOfThirtyRock(thirty_rock_user.accounts.first)
    login_as(thirty_rock_user)
  end

  test "Making team changes on a proposal" do
    skip("Feature has been removed while we finish it")
    AccountLeader.visit_team_chart
    assert(ProposalNavigatorComponent.has_selected_proposal?("main"))
    AccountLeader.make_new_proposal("plan b")
    assert(ProposalNavigatorComponent.has_selected_proposal?("plan b"))
    AccountLeader.deactivate_person("Jonathan")
    assert(TeamChartComponent.has_no_person?("Jonathan"))
    AccountLeader.switch_to_proposal("main")
    assert(TeamChartComponent.has_person?("Jonathan"))
  end

  test "Making org chart changes on a proposal" do
    skip("Feature has been removed while we finish it")
    AccountLeader.visit_org_chart
    assert(ProposalNavigatorComponent.has_selected_proposal?("main"))
    AccountLeader.make_new_proposal("plan b")
    assert(ProposalNavigatorComponent.has_selected_proposal?("plan b"))
    AccountLeader.deactivate_person("Jonathan")
    assert(TeamChartComponent.has_no_person?("Jonathan"))
    AccountLeader.switch_to_proposal("main")
    assert(TeamChartComponent.has_person?("Jonathan"))
  end
end
