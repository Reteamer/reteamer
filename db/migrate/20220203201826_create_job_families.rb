class CreateJobFamilies < ActiveRecord::Migration[7.0]
  def change
    create_table :job_families do |t|
      t.string :name, null: false
      t.integer :account_id, null: false

      t.datetime :created_at
    end

    add_column :people, :job_family_entry_key, :string
    add_column :assignments, :job_family_entry_key, :string
    safety_assured do
      remove_column :assignments, :role_on_team
    end
  end
end
