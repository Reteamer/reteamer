require_relative "./seeds/30rock"

p "Running seeds..."

p "Clearing the DB..."

ActsAsTenant.without_tenant do
  User.destroy_all
end

p "Adding 30 Rock data..."

thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)

peopleOfThirtyRock(thirty_rock_user.accounts.first)
