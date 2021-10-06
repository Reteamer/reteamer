class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :parent_key
      t.integer :account_id, null: false

      t.datetime :created_at
    end
  end
end
