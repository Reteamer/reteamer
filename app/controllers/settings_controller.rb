class SettingsController < ApplicationController
  def index
    redirect_to job_families_path and return
  end
end
