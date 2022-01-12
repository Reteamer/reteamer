module ReteamerApi
  class SelectedDateController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def index
      render json: {effective_date: session.fetch(:effective_date, Date.today.iso8601)}
    end
  end
end
