require_relative "./seeds/30rock"
require_relative "./seeds/MCU"

if Rails.env.production?
  raise "Can't run seeds on production DB because it'll destroy data"
end

ActsAsTenant.without_tenant do
  User.destroy_all
  People::Person.destroy_all
  Connections::Connection.destroy_all
  Teams::Team.destroy_all
  Assignments::Assignment.destroy_all
end

thirtyRockUser = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: 'password', password_confirmation: 'password', :terms_of_service => true)
marvelUser = User.create!(first_name: "Marvel", last_name: "Comics", email: "demo@mcu.com", admin: true, password: 'password', password_confirmation: 'password', :terms_of_service => true)

peopleOfThirtyRock(thirtyRockUser.accounts.first)
teamsOfMcu(marvelUser.accounts.first)
