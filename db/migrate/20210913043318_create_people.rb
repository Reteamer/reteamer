class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :type
      t.string :first_name
      t.string :last_name
      t.string :title
      t.string :employee_id
      t.string :supervisor_key
      t.string :email
      t.text :image_url
      t.integer :account_id, null: false

      t.datetime :created_at
    end
  end
end
