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
  end
end
