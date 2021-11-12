module ReteamerApi
  class TeamsController < ApplicationController
    def index
      selected_date = Date.parse(params.fetch(:effective_date, Date.today.iso8601))
      @teams = Entry.find_for(selected_date).where(versionable_type: Team.name).select(&:active).map(&:versionable)
    end
  end
end
