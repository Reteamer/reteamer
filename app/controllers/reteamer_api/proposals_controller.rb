module ReteamerApi
  class ProposalsController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token

    def create
      if params[:proposal_name].empty? || Proposal.proposal_names.include?(params[:proposal_name])
        render json: {error: "Proposal name must be unique"}.to_json, status: 422
        return
      end

      proposal = Proposal.create!(name: params[:proposal_name])
      set_session_proposal(proposal.id)
    end

    def switch
      new_proposal = Proposal.find_by(name: params[:proposal_name])
      set_session_proposal(new_proposal.id)
    end
  end
end
