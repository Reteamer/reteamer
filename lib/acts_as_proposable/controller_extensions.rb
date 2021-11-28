require_relative "filter"

module ActsAsProposable
  module ControllerExtensions
    # This method attaches a method that allows manual setting of the current_plan. This method should
    # be used in a before_action
    def set_current_proposal_through_filter
      include Filter
    end
  end
end
