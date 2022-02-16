module ReteamerApi
  class TeamChartsController < ApplicationController
    before_action :authenticate_user!, :require_subscription

    def show
      @selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @team_chart = TeamChart.find_for(@selected_date)
      @histogram = Entry.histogram
    end
  end
end
