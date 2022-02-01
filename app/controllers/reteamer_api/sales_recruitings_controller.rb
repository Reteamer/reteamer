module ReteamerApi
  class SalesRecruitingsController < ApplicationController
    def index
      sales_recruiting_data = []
      12.times do |i|
        sales_recruiting_data.push ({
          date: i.weeks.from_now.to_date,
          value: rand(i..i+5),
          open_reqs: rand(i..i+5),
          unassigned: rand(i..i+5)
        })
      end
      render json: sales_recruiting_data
    end
  end
end
