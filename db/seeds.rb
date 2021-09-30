if Rails.env.production?
  raise "Can't run seeds on production DB because it'll destroy data"
end

User.destroy_all
People::Person.destroy_all
Connections::Connection.destroy_all
Teams::Team.destroy_all
Assignments::Assignment.destroy_all

User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: 'password', password_confirmation: 'password')
User.create!(first_name: "Marvel", last_name: "Comics", email: "demo@mcu.com", admin: true, password: 'password', password_confirmation: 'password')

load File.join(Rails.root, 'db', 'seeds', '30rock.rb')
# load File.join(Rails.root, 'db', 'seeds', 'MCU.rb')
