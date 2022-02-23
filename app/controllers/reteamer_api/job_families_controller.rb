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
      @job_family = JobFamily.update!(params[:id], name: params["job_family"]["name"])
    rescue
      render status: :unprocessable_entity, json: {
        error: {message: "Could not save the name you specified."}
      }
    end

    def destroy
      unless(People::Person.where(job_family_id: params[:id]).count == 0)
        render status: 422, json: {error: {message: "Unable to delete this job family because it is still assigned to some people." }} and return
      end
      JobFamily.destroy(params[:id])
    end
  end
end
