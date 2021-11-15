module ReteamerApi
  class SupervisorsController < ApplicationController
    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @supervisors = Entry.find_for(selected_date).where(versionable_type: People::Person.name).select(&:active).map(&:versionable)
    end
  end
end
