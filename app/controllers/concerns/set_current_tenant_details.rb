module SetCurrentTenantDetails
  def get_current_account
    account_from_domain || account_from_subdomain || account_from_session || fallback_account
  end

  def account_from_domain
    return unless Jumpstart::Multitenancy.domain?
    Account.find_by(domain: request.domain)
  end

  def account_from_subdomain
    return unless Jumpstart::Multitenancy.subdomain? && request.subdomains.size > 0
    Account.find_by(subdomain: request.subdomains.first)
  end

  def account_from_session
    return unless Jumpstart::Multitenancy.session? && user_signed_in?
    current_user.accounts.find_by(id: session[:account_id])
  end

  def fallback_account
    return unless user_signed_in?
    current_user.accounts.order(created_at: :asc).first || current_user.create_default_account
  end
end
