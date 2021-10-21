require_relative "./seeds/30rock"

p "Running seeds..."

p "Clearing the DB..."

ActsAsTenant.without_tenant do
  User.destroy_all
  People::Person.destroy_all
  Connection.destroy_all
  Team.destroy_all
  Assignment.destroy_all
end

p "Adding 30 Rock data..."

thirtyRockUser = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: 'password', password_confirmation: 'password', :terms_of_service => true)

peopleOfThirtyRock(thirtyRockUser.accounts.first)
