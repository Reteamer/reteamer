module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      monday = Date.today.monday

      24.times do |i|
        date = monday + i.weeks
        people = Entry.find_for(date, versionable_type: People::Person.name)
        open_reqs = people.map(&:versionable).count { |p| p.is_a?(People::OpenReq) }

        people = people.reject { |p| p.is_a?(People::OpenReq) }
        assignments = Entry.find_for(date, versionable_type: Assignment.name).map(&:versionable).map(&:person_key)
        unassigned = people.count { |p| !assignments.include?(p.key) }

        oversold = [open_reqs - unassigned, 0].max
        undersold = -1 * [unassigned - open_reqs, 0].max

        sales_recruiting_data.push({
          date: date,
          open_reqs: open_reqs,
          unassigned: unassigned,
          oversold: oversold,
          undersold: undersold,
          utilization: open_reqs - unassigned
        })
      end
      render json: sales_recruiting_data
    end
  end
end
