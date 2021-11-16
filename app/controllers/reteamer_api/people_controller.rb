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
        Entry.create!(effective_at: effective_date, versionable: Assignment.new(person_key: person_entry.key, team_key: params[:team_key]))
      end

      redirect_to team_chart_path(effective_date: effective_date)
    end

    def destroy
      effective_date = Date.parse(params[:effective_at])
      if People::Person.has_subordinates?(effective_date, params[:key]) || Entry.merge_conflicts(effective_date, params[:key])
        #  render 404 in JSON and return because we can't yet deactivate this person
      end
      person = Entry.find_for(effective_date).where(versionable_type: People::Person.name, key: params[:key]).first.versionable.dup
      Entry.create(active: false, effective_at: effective_date, key: params[:key], versionable: person)

      # what about future entries?
      # _person = Entry.find_for(effective_date).where(versionable_type: People::Person.name, key: params[:key]).first.versionable.dup

      # what about all the people they supervise now and in the future?
      # People::Person.where(supervisor_key: params[:key])
    end

    def update_supervisor
      effective_date = Date.parse(person_params[:effective_date])
      person = Entry.find_for(effective_date).where(versionable_type: People::Person.name, key: person_params[:key]).first.versionable.dup
      person.supervisor_key = person_params[:supervisor_key]
      Entry.create(effective_at: effective_date, key: person_params[:key], versionable: person)
    end

    def update_team
      effective_date = Date.parse(person_params[:effective_date])
      assignment = Entry.find_for(effective_date).where(versionable_type: Assignment.name, key: person_params[:key]).first.versionable.dup
      assignment.team_key = person_params[:team_key]
      Entry.create(effective_at: effective_date, key: person_params[:key], versionable: assignment)
    end

    private

    def person_params
      params.fetch(:person, {}).permit(:effective_date, :key, :supervisor_key, :team_key)
    end
  end
end
