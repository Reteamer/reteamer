module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      12.times do |i|
        open_reqs = rand(i..i + 1)
        unassigned = rand(i..i + 1)
        how_many_to_hire = open_reqs - unassigned

        sales_recruiting_data.push ({
          date: i.weeks.from_now.to_date,
          open_reqs: open_reqs,
          unassigned: unassigned,
          how_many_to_hire: how_many_to_hire
        })
      end
      render json: sales_recruiting_data
    end
  end
end
