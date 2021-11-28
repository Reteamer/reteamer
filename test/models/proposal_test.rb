require "test_helper"

class ProposalTest < ActiveSupport::TestCase
  test "#proposal_names sorts the main proposal to the top" do
    ActsAsTenant.with_tenant(accounts(:two)) do
      Proposal.create(name: "zoo")
      Proposal.create(name: "Beta")
      Proposal.create(name: "main")
      Proposal.create(name: "alpha")
      assert_equal(["main", "alpha", "Beta", "zoo"], Proposal.proposal_names)
    end
  end
end
