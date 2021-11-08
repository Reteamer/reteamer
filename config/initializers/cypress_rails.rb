require_relative "../../db/seeds/30rock"

return unless Rails.env.test?

Rails.application.load_tasks unless defined?(Rake::Task)

CypressRails.hooks.before_server_start do
  # Called once, before either the transaction or the server is started
  fork do
    `yarn build --watch`
  end
end

CypressRails.hooks.after_transaction_start do
  # Called after the transaction is started (at launch and after each reset)
  thirty_rock_user = User.create!(first_name: "30", last_name: "Rock", email: "demo@thirtyrock.com", admin: true, password: "password", password_confirmation: "password", terms_of_service: true)

  peopleOfThirtyRock(thirty_rock_user.accounts.first)
end

CypressRails.hooks.after_state_reset do
  # Triggered after `/cypress_rails_reset_state` is called
end

CypressRails.hooks.before_server_stop do
  # Called once, at_exit
  Rake::Task["db:test:prepare"].invoke
end
