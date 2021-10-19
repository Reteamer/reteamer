class OrgChartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @selected_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
  end
end
