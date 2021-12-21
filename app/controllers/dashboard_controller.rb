class DashboardController < ApplicationController
  def show
    if subscribed?
      redirect_to team_chart_path and return
    end
  end
end
