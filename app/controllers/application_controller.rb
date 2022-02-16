class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include BundleAssets
  include SetCurrentRequestDetails
  include SetLocale
  include Jumpstart::Controller
  include Accounts::SubscriptionStatus
  include Users::NavbarNotifications
  include Users::Sudo
  include Users::TimeZone
  include Pagy::Backend
  include CurrentHelper
  include Sortable
  include DeviceFormat
  include Authorization

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_selected_date

  around_action :settings_time_zone

  impersonates :user
  add_flash_types :error

  protected

  def check_plan_policy
    allowed_people = PlanPolicy.allowed_people
    if allowed_people == PlanPolicy::TOO_MANY
      flash[:error] = "Your plan has the maximum number of allocatable people (#{PlanPolicy::MAX_ALLOCATABLE_PEOPLE}), please #{view_context.link_to("upgrade", subscriptions_path)}".html_safe
    elsif allowed_people == PlanPolicy::NEARING_LIMIT
      flash[:alert] = "Your plan is nearing the maximum number of allocatable people (#{PlanPolicy::MAX_ALLOCATABLE_PEOPLE}), please #{view_context.link_to("upgrade", subscriptions_path)}".html_safe
    end
  end

  # To add extra fields to Devise registration, add the attribute names to `extra_keys`
  def configure_permitted_parameters
    extra_keys = [:avatar, :name, :time_zone, :preferred_language]
    signup_keys = extra_keys + [:terms_of_service, :invite, owned_accounts_attributes: [:name]]
    devise_parameter_sanitizer.permit(:sign_up, keys: signup_keys)
    devise_parameter_sanitizer.permit(:account_update, keys: extra_keys)
    devise_parameter_sanitizer.permit(:accept_invitation, keys: extra_keys)
  end

  def set_selected_date
    session[:effective_date] = params[:effective_date] if params[:effective_date]
  end

  def after_sign_in_path_for(resource_or_scope)
    stored_location_for(resource_or_scope) || super
  end

  # Helper method for verifying authentication in a before_action, but redirecting to sign up instead of login
  def authenticate_user_with_sign_up!
    unless user_signed_in?
      store_location_for(:user, request.fullpath)
      redirect_to new_user_registration_path, alert: t("create_an_account_first")
    end
  end

  def require_current_account_admin
    unless current_account_admin?
      redirect_to root_path, alert: t("must_be_an_admin")
    end
  end

  def require_subscription
    unless subscribed?
      redirect_to pricing_path, alert: t("must_be_subscribed")
    end
  end

  def settings_time_zone(&block)
    Time.use_zone("UTC") { yield }
  end
end
