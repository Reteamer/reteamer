class People::EmployeePolicy < ApplicationPolicy
  def create?
    return true if People::Person.count <= 20
    return false if Current.account.payment_processor.on_trial_or_subscribed?(processor_plan: "getting_started")
    Current.account.payment_processor&.subscribed?
  end
end
