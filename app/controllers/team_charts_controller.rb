class TeamChartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @current_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
    @histogram = TeamChart.histogram
  end
end
