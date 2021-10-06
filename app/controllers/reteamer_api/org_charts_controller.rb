module ReteamerApi
  class OrgChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
      @people = Entry.find_for(selected_date).where(versionable_type: "People::Person").map(&:versionable)
      @histogram = Entry.histogram
      # @connections = Connections::Connection.find_for(@current_date) || []
      @connections = []
    end
  end
end
