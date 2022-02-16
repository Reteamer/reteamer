module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      monday = Date.today.monday

      24.times do |i|
        date = monday + i.weeks

        people = Entry.find_for(date, versionable_type: People::Person.name)

        if params[:job_family_id] && params[:job_family_id] != "all"
          people = people.select { |p| p.versionable.job_family_id == params[:job_family_id].to_i }
        end

        open_reqs = people.map(&:versionable).count { |p| p.is_a?(People::OpenReq) }

        people = people.reject { |p| p.is_a?(People::OpenReq) }
        assignments = Entry.find_for(date, versionable_type: Assignment.name).map(&:versionable).map(&:person_key)
        unassigned = people.count { |p| !assignments.include?(p.key) }

        sales_recruiting_data.push({
          date: date,
          open_reqs: open_reqs,
          unassigned: -1 * unassigned,
          utilization: open_reqs - unassigned
        })
      end
      render json: sales_recruiting_data
    end
  end
end
