count = ActsAsTenant.without_tenant do
  ActsAsProposable.without_proposal do
    People::Person.count
  end
end

good_count = 0
bad_count = 0

Account.all.each do |a|
  ActsAsTenant.with_tenant(a) do
    ActsAsProposable.with_proposal(Proposal.default_proposal) do
      People::Person.all.each do |person|
        person.update!(job_family: JobFamily.find_by(name: "Other"))
        good_count += 1
      rescue
        p "!!!!!!!!!!!!!", person.id
        bad_count += 1
      end
    end
  end
end

p "COUNT: ", count
p "GOOD COUNT: ", good_count
p "BAD COUNT: ", bad_count
p "MISSING COUNT: ", count - bad_count - good_count
