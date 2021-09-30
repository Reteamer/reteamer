module ReteamerApi
  class TeamChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      current_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))

      render :json => {
        :current_date => current_date,
        :chart => TeamChart.find_for(current_date) || [],
        :histogram => People::Person.histogram,
      }
    end
  end
end
