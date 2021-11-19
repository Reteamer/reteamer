module ReteamerApi
  class TeamsController < ApplicationController
    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @teams = Entry.find_for(selected_date).where(versionable_type: Team.name).select(&:active).map(&:versionable)
    end

    def create
      plan = Reteamer::Plan.find_by(name: params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME))
      Entry.create!(plan: plan, effective_at: params[:effective_at], versionable: Team.new(name: params[:name], parent_key: params[:parent_key]))
      redirect_to team_chart_path(effective_date: effective_date)
    end
  end
end
