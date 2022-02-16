class ChangeJobFamilyIdType < ActiveRecord::Migration[7.0]
  def change
    safety_assured do
      remove_column :people, :job_family_id
      add_column :people, :job_family_id, :bigint
    end
  end
end
