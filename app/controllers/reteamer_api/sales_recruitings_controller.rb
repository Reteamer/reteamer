module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      monday = Date.today.monday

      12.times do |i|
        date = monday + i.weeks
        people = Entry.find_for(date, versionable_type: People::Person.name)
        open_reqs = people.map(&:versionable).select{ |p| p.is_a?(People::OpenReq) }.count

        people = people.reject{ |p| p.is_a?(People::OpenReq) }
        assignments = Entry.find_for(date, versionable_type: Assignment.name).map(&:versionable).map(&:person_key)
        unassigned = people.select{ |p| !assignments.include?(p.key) }.count

        how_many_to_hire = open_reqs - unassigned

        sales_recruiting_data.push ({
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
