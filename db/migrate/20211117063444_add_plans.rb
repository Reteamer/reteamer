ActiveRecord::Base.logger = Logger.new(STDOUT)
class AddPlans < ActiveRecord::Migration[6.1]
  # module Reteamer
  #   class Plan < ApplicationRecord
  #     self.table_name = "reteamer_plans"
  #     acts_as_tenant :account
  #   end
  # end

  def self.up
    create_table :reteamer_plans do |t|
      t.string :name, null: false
      t.integer :account_id, null: false

      t.datetime :created_at
    end

    Account.all.each do |account|
      ActsAsTenant.with_tenant(account) do
        if Reteamer::Plan.where(name: "main").none?
          Reteamer::Plan.create(name: "main")
        end
      end
    end
  end

  def self.down
    drop_table :reteamer_plans
  end
end
