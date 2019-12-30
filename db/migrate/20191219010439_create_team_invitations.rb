class CreateTeamInvitations < ActiveRecord::Migration[6.0]
  def change
    create_table :team_invitations do |t|
      t.belongs_to :team, null: false, foreign_key: true
      t.belongs_to :invited_by, null: false, foreign_key: { to_table: :users }
      t.string :token
      t.string :name
      t.string :email
      t.jsonb :roles, null: false, default: {}

      t.timestamps
    end
    add_index :team_invitations, :token, unique: true
  end
end
