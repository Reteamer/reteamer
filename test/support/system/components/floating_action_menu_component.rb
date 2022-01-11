require_relative "component_under_test"

class FloatingActionMenuComponent < ComponentUnderTest
  class << self
    def make_new_proposal(proposal_name)
      within(".fab-container") do
        find(".fa-plus").click
        find("li", text: "Add New Proposal").click
      end

      within("new-proposal-modal") do
        fill_in("Proposal name", with: proposal_name)
        click_on("Submit")
      end
    end

    def make_new_team(team_name)
      within(".fab-container") do
        find(".fa-plus").click
        find("li", text: "Add New Team").click
      end

      within("#team-form", visible: :all) do
        click_on("Next")
        fill_in("name", with: team_name)
        select("No Parent/Top Level", from: "parent_key")
        click_on("Submit")
      end
    end

    def make_new_person(first_name)
      within(".fab-container") do
        find(".fa-plus").click
        find("li", text: "Add New Person").click
      end

      within("#person-form", visible: :all) do
        click_on("Next")
        select("an Employee", from: "type")
        fill_in("first_name", with: first_name)
        select("Jack Donaghy", from: "supervisor_key")
        select("General Electric", from: "team_key")
        click_on("Submit")
      end
    end

    def make_new_open_req(title)
      within(".fab-container") do
        find(".fa-plus").click
        find("li", text: "Add New Open Req").click
      end

      within("#open-req-form", visible: :all) do
        click_on("Next")
        fill_in("title", with: title)
        select("Jack Donaghy", from: "supervisor_key")
        select("General Electric", from: "team_key")
        click_on("Submit")
      end
    end
  end
end
