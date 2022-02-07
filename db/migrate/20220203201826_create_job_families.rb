class CreateJobFamilies < ActiveRecord::Migration[7.0]
  def change
    create_table :job_families do |t|
      t.string :name, null: false
      t.integer :account_id, null: false

      t.datetime :created_at
    end

    add_column :people, :job_family_entry_key, :string


    # TODO: Migrate the data for existing accounts
    #     other = Entry.create(effective_at: Date.today, versionable: JobFamily.new("Other"))
    #
  end
end
