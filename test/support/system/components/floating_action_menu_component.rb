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

      within("#team-form") do
        click_on("Next")
        fill_in("name", with: team_name)
        click_on("Submit")
      end
    end
  end
end
