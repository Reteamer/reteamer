module SetCurrentProposalDetails
  def get_current_proposal
    get_session_proposal || fallback_proposal
  end

  def get_session_proposal
    return unless Jumpstart::Multitenancy.session? && user_signed_in?
    Proposal.find_by(id: session[:proposal_id])
  end

  def fallback_proposal
    return unless user_signed_in?
    Proposal.default_proposal
  end
end
