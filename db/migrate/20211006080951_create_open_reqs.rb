class CreateOpenReqs < ActiveRecord::Migration[6.1]
  def change
    create_table :open_reqs do |t|
      t.string :title
      t.string :supervisor_key
      t.integer :account_id, null: false

      t.timestamps
    end
  end
end
