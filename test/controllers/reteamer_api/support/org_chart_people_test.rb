require "test_helper"

class OrgChartPeopleTest < ActiveSupport::TestCase
  def setup
    # Do nothing
  end

  def teardown
    # Do nothing
  end

  test "#org_chart returns people in the main plan and the specified plan" do
    today = Date.today
    main_entry = nil
    proposed_entry = nil
    other_entry = nil
    ActsAsProposable.with_proposal(proposals(:main)) do
      main_entry = Entry.create(effective_at: today, versionable: People::Person.new(first_name: "Main Person"))
    end
    ActsAsProposable.with_proposal(proposals(:plan_b)) do
      proposed_entry = Entry.create(effective_at: today, versionable: People::Person.new(first_name: "Proposed Person"))
    end
    ActsAsProposable.with_proposal(proposals(:plan_c)) do
      other_entry = Entry.create(effective_at: today, versionable: People::Person.new(first_name: "Other Person"))
    end

    actual = ReteamerApi::Support::OrgChartPeople.org_chart(Date.today, proposals(:plan_b).name)
    assert(actual.include?(main_entry.versionable))
    assert(actual.include?(proposed_entry.versionable))
    assert(!actual.include?(other_entry.versionable))

    actual = ReteamerApi::Support::OrgChartPeople.org_chart(Date.today, proposals(:main).name)
    assert(actual.include?(main_entry.versionable))
    assert(!actual.include?(proposed_entry.versionable))
    assert(!actual.include?(other_entry.versionable))
  end
end
