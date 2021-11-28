require "test_helper"

module ActsAsProposable
  class ModelExtensionsTest < ActiveSupport::TestCase
    setup do
      @main_proposal_entry = ActsAsProposable.with_proposal(proposals(:main)) do
        FactoryBot.create(:person_entry)
      end

      @plan_b_proposal_entry = ActsAsProposable.with_proposal(proposals(:plan_b)) do
        FactoryBot.create(:person_entry)
      end

      @plan_c_proposal_entry = ActsAsProposable.with_proposal(proposals(:plan_c)) do
        FactoryBot.create(:person_entry)
      end
    end

    test "it scopes the model to the default_proposal if the default_proposal is also the current_proposal" do
      ActsAsProposable.with_proposal(proposals(:main)) do
        results = Entry.all
        assert_includes(results, @main_proposal_entry)
        refute_includes(results, @plan_b_proposal_entry)
        refute_includes(results, @plan_c_proposal_entry)
      end
    end

    test "it scopes the model to the current_proposal AND the default_proposal" do
      ActsAsProposable.with_proposal(proposals(:plan_b)) do
        results = Entry.all
        assert_includes(results, @main_proposal_entry)
        assert_includes(results, @plan_b_proposal_entry)
        refute_includes(results, @plan_c_proposal_entry)
      end
    end
  end
end
