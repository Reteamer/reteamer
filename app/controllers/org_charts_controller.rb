class OrgChartsController < ApplicationController
  before_action :authenticate_user!

  def show
    @selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
    @selected_plan = params.fetch(:plan_name, "main")
    @plan_names = Entry.group(:plan_name).pluck(:plan_name)
  end
end
