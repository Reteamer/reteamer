module SetCurrentRequestDetails
  include SetCurrentTenantDetails
  include SetCurrentProposalDetails
  extend ActiveSupport::Concern

  included do |base|
    if base < ActionController::Base
      set_current_tenant_through_filter
      set_current_proposal_through_filter
      before_action :set_request_details
    end
  end

  def set_request_details
    Current.request_id = request.uuid
    Current.user_agent = request.user_agent
    Current.ip_address = request.ip
    Current.user = current_user

    # Account may already be set by the AccountMiddleware via subdomain/url
    Current.account ||= get_current_account
    set_current_tenant(Current.account)

    Current.proposal = get_current_proposal
    set_current_proposal(Current.proposal)
  end
end
