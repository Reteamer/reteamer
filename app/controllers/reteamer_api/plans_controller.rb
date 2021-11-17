module ReteamerApi
  class PlansController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token

    def create
      if params[:plan_name].empty? || Reteamer::Plan.plan_names.include?(params[:plan_name])
        render :json => {:error => "Plan name must be unique"}.to_json, :status => 422
        return
      end

      Reteamer::Plan.create!(name: params[:plan_name])
    end
  end
end
