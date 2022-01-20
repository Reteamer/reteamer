module ReteamerApi
  class SupervisorsController < ApplicationController
    before_action :authenticate_user!, :require_subscription

    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @supervisors = Entry.find_for(selected_date, versionable_type: People::Person.name).map(&:versionable).select { |v| !v.is_a?(People::OpenReq) }
    end
  end
end
