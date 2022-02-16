require "test_helper"

class OrgChartPeopleTest < ActiveSupport::TestCase
  def setup
    @today = Date.today

    @main_entry = ActsAsProposable.with_proposal(proposals(:main)) do
      Entry.create(effective_at: @today, versionable: FactoryBot.build(:person, first_name: "Main Person"))
    end

    @proposed_entry = ActsAsProposable.with_proposal(proposals(:plan_b)) do
      Entry.create(effective_at: @today, versionable: FactoryBot.build(:person, first_name: "Proposed Person"))
    end

    @other_entry = ActsAsProposable.with_proposal(proposals(:plan_c)) do
      Entry.create(effective_at: @today, versionable: FactoryBot.build(:person, first_name: "Other Person"))
    end
  end

  test "#org_chart returns people in the main plan and the specified plan" do
    ActsAsProposable.with_proposal(proposals(:main)) do
      actual = ReteamerApi::Support::OrgChartPeople.org_chart(@today)
      assert_includes(actual, @main_entry.versionable)
      refute_includes(actual, @proposed_entry.versionable)
      refute_includes(actual, @other_entry.versionable)
    end

    ActsAsProposable.with_proposal(proposals(:plan_b)) do
      actual = ReteamerApi::Support::OrgChartPeople.org_chart(@today)
      assert_includes(actual, @main_entry.versionable)
      assert_includes(actual, @proposed_entry.versionable)
      refute_includes(actual, @other_entry.versionable)
    end
  end
end
