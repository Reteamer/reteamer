module ReteamerApi
  class SupervisorsController < ApplicationController
    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @supervisors = Entry.find_for(selected_date, versionable_type: People::Person.name).map(&:versionable)
    end
  end
end
