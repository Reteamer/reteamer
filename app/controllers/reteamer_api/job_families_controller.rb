module ReteamerApi
  class JobFamiliesController < ApplicationController
    def index
      @job_families = JobFamily.all
    end

    def create
      @job_family = JobFamily.create(name: params["job_family"]["name"])
    rescue
      render status: :unprocessable_entity, json: {
        error: {message: "Could not save the name you specified."}
      }
    end

    def update
      JobFamily.update!(params[:id], name: params["job_family"]["name"])
    rescue
      render status: :unprocessable_entity, json: {
        error: {message: "Could not save the name you specified."}
      }
    end
  end
end
