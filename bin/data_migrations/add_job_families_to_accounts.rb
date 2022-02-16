Account.all.each do |a|
  ActsAsTenant.with_tenant(a) do
    ActsAsProposable.with_proposal(Proposal.default_proposal) do
      JobFamily.create!(name: "Other")
      JobFamily.create!(name: "Software Engineer")
      JobFamily.create!(name: "Product Manager")
      JobFamily.create!(name: "Product Designer")
    end
  end
end
