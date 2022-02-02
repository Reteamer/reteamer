module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      monday = Date.today.monday

      12.times do |i|
        date = monday + i.weeks
        people = Entry.find_for(date, versionable_type: People::Person.name)
        open_reqs = people.map(&:versionable).count { |p| p.is_a?(People::OpenReq) }

        people = people.reject { |p| p.is_a?(People::OpenReq) }
        assignments = Entry.find_for(date, versionable_type: Assignment.name).map(&:versionable).map(&:person_key)
        unassigned = people.count { |p| !assignments.include?(p.key) }

        how_many_to_hire = open_reqs - unassigned

        sales_recruiting_data.push({
          date: date,
          open_reqs: open_reqs,
          unassigned: unassigned,
          how_many_to_hire: how_many_to_hire
        })
      end
      render json: sales_recruiting_data
    end
  end
end
