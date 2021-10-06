class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :person_key, null: false
      t.string :team_key, null: false
      t.string :role_on_team
      t.integer :account_id, null: false

      t.datetime :created_at
    end
  end
end
