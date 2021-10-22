require_relative "../../db/seeds/30rock"

class ResetDataController < ApplicationController
  before_action :authenticate_user!

  def show
    peopleOfThirtyRock(current_account)
  end
end
