module ReteamerApi
  class TeamChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
      @team_chart = TeamChart.find_for(selected_date)
      @histogram = Entry.histogram
    end
  end
end
