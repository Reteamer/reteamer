module ReteamerApi
  class PersonFormDropDownsController < ApplicationController
    before_action :authenticate_user!, :require_subscription

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @teams = Entry.find_for(selected_date, versionable_type: Team.name)
      @supervisors = Entry.find_for(selected_date, versionable_type: People::Person.name)
      @job_families = JobFamily.all
    end
  end
end
