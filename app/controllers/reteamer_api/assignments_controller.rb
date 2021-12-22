module ReteamerApi
  class AssignmentsController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def create
      effective_date = Date.parse(params[:effective_date])
      assignment = Assignment.new(team_key: params[:destination_team_key], person_key: params[:person_key])
      Entry.create(effective_at: effective_date, key: params[:key], versionable: assignment)
    end

    def update
      effective_date = Date.parse(params[:effective_date])
      assignment = Entry.find_for(effective_date, key: params[:key]).first.versionable.dup
      assignment.team_key = params[:destination_team_key]
      Entry.create(effective_at: effective_date, key: params[:key], versionable: assignment)
    end
  end
end
