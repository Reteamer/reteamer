module ReteamerApi
  class TeamParentsController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def update
      effective_date = Date.parse(params[:effective_date])
      new_team = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_team.assign_attributes(
        parent_key: params[:parent_key]
      )
      entry = Entry.create!(key: params[:key], effective_at: effective_date, versionable: new_team)

      Support::TeamEditor.new(entry).apply_intentions_going_forward
    end
  end
end
