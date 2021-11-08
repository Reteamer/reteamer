class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :key, null: false
      t.datetime :effective_at, null: false, unique: true
      t.boolean :active, null: false, default: true
      t.references :versionable, polymorphic: true, index: true
      t.integer :account_id, null: false

      t.datetime :created_at
    end
  end
end
