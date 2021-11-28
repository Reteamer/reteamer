module ActsAsProposable
  module Filter
    extend ActiveSupport::Concern

    private

    def set_current_proposal(proposal)
      ActsAsProposable.current_proposal = proposal
    end

    def set_session_proposal(proposal_id)
      session[:proposal_id] = proposal_id
    end
  end
end
