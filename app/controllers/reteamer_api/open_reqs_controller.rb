module ReteamerApi
  class OpenReqsController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def create
      new_open_req = People::OpenReq.new(
        supervisor_key: params[:supervisor_key],
        job_family_id: params[:job_family_id]
      )

      authorize new_open_req.becomes(People::Person)

      effective_date = Date.parse(params[:effective_at])
      open_req_entry = Entry.create!(effective_at: effective_date, versionable: new_open_req)

      if params[:team_key].present?
        Entry.create!(effective_at: effective_date, versionable: Assignment.new(person_key: open_req_entry.key, team_key: params[:team_key]))
      end

      render json: {}
    rescue Pundit::NotAuthorizedError
      render json:
        {
          error:
            {
              message: "Your current plan limit of #{PlanPolicy::MAX_ALLOCATABLE_PEOPLE} people and open reqs has been met. Please #{view_context.link_to("upgrade to continue", subscriptions_path)}."
            }
        },
        status: :unprocessable_entity
    rescue ActiveRecord::RecordInvalid
      render json:
        {
          error:
            {
              message: "Unable to save this open req. Please pick a job family."
            }
        },
        status: :unprocessable_entity
    end

    def update
      effective_date = params[:effective_at].in_time_zone("UTC")
      new_open_req = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_open_req.assign_attributes(
        job_family_id: open_req_params[:job_family_id]
      )
      entry = Entry.create!(key: params[:key], effective_at: effective_date, versionable: new_open_req)

      Support::PersonEditor.new(entry).apply_intentions_going_forward
    end

    private

    def open_req_params
      params.fetch(:open_req, {}).permit(:job_family_id)
    end
  end
end
