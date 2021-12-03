module ReteamerApi
  class OrgChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @people = Support::OrgChartPeople.org_chart(selected_date)
      @histogram = Entry.histogram.where(versionable_type: People::Person.name)
      @connections = Entry.find_for(selected_date, versionable_type: Connection.name).map(&:versionable)
    end
  end
end
