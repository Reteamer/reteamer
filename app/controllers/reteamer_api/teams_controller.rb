module ReteamerApi
  class TeamsController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @teams = Entry.find_for(selected_date, versionable_type: Team.name).map(&:versionable)
    end

    def update
      effective_date = Date.parse(params[:effective_at])
      new_team = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_team.assign_attributes(
        name: team_params[:name]
      )
      entry = Entry.create!(key: params[:key], effective_at: effective_date, versionable: new_team)

      Support::TeamEditor.new(entry).apply_intentions_going_forward
    end

    def create
      Entry.create!(effective_at: params[:effective_at], versionable: Team.new(name: params[:name], parent_key: params[:parent_key]))
      redirect_to team_chart_path(effective_date: params[:effective_at].to_date)
    end

    def destroy
      effective_date = Date.parse(params[:effective_at])
      team_key = params[:key]

      Support::TeamDeactivator.deactivate(team_key, effective_date)
    end

    private

    def team_params
      params.fetch(:team, {}).permit(:effective_date, :key, :name, :parent_key)
    end
  end
end
