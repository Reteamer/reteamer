class ChangePlansToProposals < ActiveRecord::Migration[6.1]
  def change
    safety_assured {
      rename_table :reteamer_plans, :proposals

      rename_column :entries, :plan_id, :proposal_id
    }
  end
end
