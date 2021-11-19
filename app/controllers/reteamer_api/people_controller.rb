module ReteamerApi
  class PeopleController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token

    def create
      new_person = People::Person.new(
        type: "People::" + params[:type],
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        title: params[:title],
        supervisor_key: params[:supervisor_key],
        employee_id: params[:employee_id]
      )
      effective_date = Date.parse(params[:effective_at])
      person_entry = Entry.create!(effective_at: effective_date, versionable: new_person)

      if params[:team_key]
        plan = Reteamer::Plan.find_by(name: params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME))
        Entry.create!(plan: plan, effective_at: effective_date, versionable: Assignment.new(person_key: person_entry.key, team_key: params[:team_key]))
      end

      redirect_to team_chart_path(effective_date: effective_date)
    end

    def destroy
      effective_date = Date.parse(params[:effective_at])
      person_key = params[:key]
      plan = Reteamer::Plan.find_by(name: params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME))

      Support::PersonDeactivator.deactivate(plan, person_key, effective_date)
    end

    def update_supervisor
      effective_date = Date.parse(person_params[:effective_date])
      person = Entry.find_for(effective_date).where(versionable_type: People::Person.name, key: person_params[:key]).first.versionable.dup
      person.supervisor_key = person_params[:supervisor_key]
      plan = Reteamer::Plan.find_by(name: params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME))
      Entry.create(plan: plan, effective_at: effective_date, key: person_params[:key], versionable: person)
    end

    def update_team
      effective_date = Date.parse(person_params[:effective_date])
      assignment = Entry.find_for(effective_date).where(versionable_type: Assignment.name, key: person_params[:key]).first.versionable.dup
      assignment.team_key = person_params[:team_key]
      plan = Reteamer::Plan.find_by(name: params.fetch(:plan_name, Reteamer::Plan::MAIN_PLAN_NAME))
      Entry.create(plan: plan, effective_at: effective_date, key: person_params[:key], versionable: assignment)
    end

    private

    def person_params
      params.fetch(:person, {}).permit(:effective_date, :key, :supervisor_key, :team_key, :plan_name)
    end
  end
end
