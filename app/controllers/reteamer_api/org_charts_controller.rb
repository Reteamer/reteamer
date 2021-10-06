module ReteamerApi
  class OrgChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
      @people = Entry.find_for(selected_date).where(versionable_type: People::Person.name).select(&:active).map(&:versionable)
      @histogram = Entry.histogram.where(versionable_type: People::Person.name)
      @connections = Entry.find_for(selected_date).where(versionable_type: Connection.name).map(&:versionable)
    end
  end
end
