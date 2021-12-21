require_relative "component_under_test"

class ProposalNavigatorComponent < ComponentUnderTest
  class << self
    def has_selected_proposal?(proposal_name)
      within("proposal-navigator") do
        has_select?(selected: proposal_name)
      end
    end

    def switch_to_proposal(proposal_name)
      within("proposal-navigator") do
        select(proposal_name, from: "proposal_name")
      end
    end
  end
end
