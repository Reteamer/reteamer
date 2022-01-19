class People::PersonPolicy < ApplicationPolicy
  def create?
    PlanPolicy.allowed_people != PlanPolicy::TOO_MANY
  end
end
