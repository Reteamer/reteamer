module ReteamerApi
  class OpenReqsController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def create
      new_open_req = People::OpenReq.new(
        title: params[:title],
        supervisor_key: params[:supervisor_key]
      )
      effective_date = Date.parse(params[:effective_at])
      open_req_entry = Entry.create!(effective_at: effective_date, versionable: new_open_req)

      if params[:team_key]
        Entry.create!(effective_at: effective_date, versionable: Assignment.new(person_key: open_req_entry.key, team_key: params[:team_key]))
      end
    end

    def update
      effective_date = Date.parse(params[:effective_at])
      new_open_req = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_open_req.assign_attributes(
        title: open_req_params[:title]
      )
      entry = Entry.create!(key: params[:key], effective_at: effective_date, versionable: new_open_req)

      Support::PersonEditor.new(entry).apply_intentions_going_forward
    end

    private

    def open_req_params
      params.fetch(:open_req, {}).permit(:title)
    end
  end
end
