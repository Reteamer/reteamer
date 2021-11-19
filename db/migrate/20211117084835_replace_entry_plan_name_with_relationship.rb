class ReplaceEntryPlanNameWithRelationship < ActiveRecord::Migration[6.1]
  class Entry < ApplicationRecord
    belongs_to :plan, class_name: "Reteamer::Plan"
    acts_as_tenant :account
  end

  def change
    add_column :entries, :plan_id, :bigint

    ActsAsTenant.without_tenant do
      Entry.all.each do |entry|
        ActsAsTenant.with_tenant(entry.account) do
          plan = Reteamer::Plan.find_or_create_by(name: entry.plan_name)
          raise "no plan found for entry: #{entry.id} and account #{entry.account.id}" unless plan
          entry.update!(plan: plan)
        end
      end
    end

    safety_assured {
      change_column_null :entries, :plan_id, false
      remove_column :entries, :plan_name
    }
  end
end
