module ReteamerApi
  class PeopleController < ApplicationController
    before_action :authenticate_user!, :require_subscription
    skip_before_action :verify_authenticity_token

    def create
      new_person = People::Person.new(
        type: "People::" + params[:type],
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        title: params[:title],
        supervisor_key: params[:supervisor_key].presence,
        job_family_id: params[:job_family_id],
        employee_id: params[:employee_id]
      )

      authorize new_person.becomes(People::Person)

      effective_date = Date.parse(params[:effective_at])
      person_entry = Entry.create(effective_at: effective_date, versionable: new_person)
      unless person_entry.valid?
        render status: :unprocessable_entity, json:
          {
            error: {message: "Error: Make sure you specify a name and a job family"}
          } and return
      end

      if params[:team_key].present?
        Entry.create!(effective_at: effective_date, versionable: Assignment.new(person_key: person_entry.key, team_key: params[:team_key]))
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
    end

    def update
      effective_date = Date.parse(params[:effective_at])
      new_person = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_person.assign_attributes(
        first_name: person_params[:first_name],
        last_name: person_params[:last_name],
        email: person_params[:email],
        title: person_params[:title],
        employee_id: person_params[:employee_id],
        job_family_id: person_params[:job_family_id]
      )
      entry = Entry.create(key: params[:key], effective_at: effective_date, versionable: new_person)
      unless entry.valid?
        render status: :unprocessable_entity, json:
          {
            error: {message: "Error: Make sure you specify a name and a job family"}
          } and return
      end

      Support::PersonEditor.new(entry).apply_intentions_going_forward
    end

    def destroy
      effective_date = Date.parse(params[:effective_at])
      person_key = params[:key]

      Support::PersonDeactivator.deactivate(person_key, effective_date)
    end

    def update_supervisor
      effective_date = Date.parse(person_params[:effective_date])
      person = Entry.find_for(effective_date, key: person_params[:key]).first.versionable.dup
      person.supervisor_key = person_params[:supervisor_key]
      Entry.create(effective_at: effective_date, key: person_params[:key], versionable: person)
    end

    private

    def person_params
      params.fetch(:person, {}).permit(:effective_date, :key, :supervisor_key, :team_key, :job_family_id, :first_name, :last_name, :email, :title, :employee_id)
    end
  end
end
