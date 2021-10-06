module ReteamerApi
  class OrgChartsController < ApplicationController
    before_action :authenticate_user!

    def show
      selected_date = Date.parse(params.fetch(:effective_date, Date.current.iso8601))
      @people = Entry.where(
        effective_at: ..selected_date.end_of_day,
        versionable_type: "People::Person"
      )
                     .order(effective_at: :desc)
                     .group_by(&:key)
                     .map { |_, models| models.first }
                     .select { |model| model.active? }
                     .map(&:versionable)
      @histogram = Entry.histogram
      # @connections = Connections::Connection.find_for(@current_date) || []
      @connections = []
    end
  end
end
