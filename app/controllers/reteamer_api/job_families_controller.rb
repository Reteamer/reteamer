module ReteamerApi
  class JobFamiliesController < ApplicationController

    def index
      @job_families = JobFamily.all
    end
  end
end
