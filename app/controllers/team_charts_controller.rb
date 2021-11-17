class TeamChartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
    @selected_plan = params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME)
    @plan_names = Reteamer::Plan.plan_names
  end
end
