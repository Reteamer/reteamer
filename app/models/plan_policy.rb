class PlanPolicy
  OKAY = :ok
  NEARING_LIMIT = :nearing_limit
  TOO_MANY = :too_many
  MAX_ALLOCATABLE_PEOPLE = 20
  DEFAULT_ALLOCATABLE_PEOPLE = 18

  def self.allowed_people
    if Current.account.payment_processor.subscribed?(processor_plan: Settings.payment_processor.getting_started_price_id)
      person_count = Entry.find_for(1.year.from_now, versionable_type: People::Person.name).count
      if person_count.between?(DEFAULT_ALLOCATABLE_PEOPLE, MAX_ALLOCATABLE_PEOPLE - 1)
        return NEARING_LIMIT
      elsif person_count >= MAX_ALLOCATABLE_PEOPLE
        return TOO_MANY
      end
    end

    OKAY
  end
end
