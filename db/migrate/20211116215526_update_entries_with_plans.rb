class UpdateEntriesWithPlans < ActiveRecord::Migration[6.1]
  def self.up
    add_column :entries, :plan_name, :string, default: "main", null: false

    Entry.update_all(plan_name: "main")
  end

  def self.down
    remove_column :entries, :plan_name
  end

  class Entry < ApplicationRecord; end
end
