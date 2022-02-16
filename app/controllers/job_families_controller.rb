class JobFamiliesController < ApplicationController
  def index
    @job_families = JobFamily.all.order(:name)
  end
end
