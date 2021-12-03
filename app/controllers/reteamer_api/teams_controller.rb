module ReteamerApi
  class TeamsController < ApplicationController
    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @teams = Entry.find_for(selected_date, versionable_type: Team.name).map(&:versionable)
    end

    def create
      Entry.create!(effective_at: params[:effective_at], versionable: Team.new(name: params[:name], parent_key: params[:parent_key]))
      redirect_to team_chart_path(effective_date: params[:effective_at].to_date)
    end
  end
end
