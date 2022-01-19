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
        employee_id: params[:employee_id]
      )

      authorize new_person.becomes(People::Person)

      effective_date = Date.parse(params[:effective_at])
      person_entry = Entry.create!(effective_at: effective_date, versionable: new_person)

      if params[:team_key]
        Entry.create!(effective_at: effective_date, versionable: Assignment.new(person_key: person_entry.key, team_key: params[:team_key]))
      end
    end

    def update
      effective_date = Date.parse(params[:effective_at])
      new_person = Entry.find_for(effective_date, key: params[:key]).first.versionable.deep_clone
      new_person.assign_attributes(
        first_name: person_params[:first_name],
        last_name: person_params[:last_name],
        email: person_params[:email],
        title: person_params[:title],
        employee_id: person_params[:employee_id]
      )
      entry = Entry.create!(key: params[:key], effective_at: effective_date, versionable: new_person)

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
      params.fetch(:person, {}).permit(:effective_date, :key, :supervisor_key, :team_key, :first_name, :last_name, :email, :title, :employee_id)
    end
  end
end
