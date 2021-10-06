class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.string :person_key, null: false
      t.string :other_supervisor_key, null: false
      t.string :label
      t.integer :account_id, null: false

      t.datetime :created_at
    end
  end
end
