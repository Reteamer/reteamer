class ChangeJobFamilyField < ActiveRecord::Migration[7.0]
  def change
    safety_assured do
      rename_column :people, :job_family_entry_key, :job_family_key
    end
  end
end
