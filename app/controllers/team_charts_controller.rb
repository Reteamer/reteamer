class TeamChartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
    @selected_proposal = params.fetch(:proposal_name, Proposal::MAIN_PROPOSAL_NAME)
    @proposal_names = Proposal.proposal_names
  end
end
