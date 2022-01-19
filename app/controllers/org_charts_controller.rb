class OrgChartsController < ApplicationController
  before_action :authenticate_user!, :require_subscription, :check_plan_policy

  def show
    @selected_date = Date.parse(session.fetch(:effective_date, Date.today.iso8601))
    @selected_proposal = params.fetch(:proposal_name, Proposal::MAIN_PROPOSAL_NAME)
    @proposal_names = Proposal.proposal_names
  end
end
