class RemoveUnusedJobFamilyKey < ActiveRecord::Migration[7.0]
  def change
    safety_assured do
      remove_column :assignments, :job_family_entry_key
    end
  end
end
