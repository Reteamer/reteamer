ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"
require "minitest/mock"

# Uncomment to view full stack trace in tests
# Rails.backtrace_cleaner.remove_silencers!

require "sidekiq/testing" if defined?(Sidekiq)
Zonebie.set_random_timezone

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  # parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Include the FactoryBot helper methods so you don't have to prefix them all with FactoryBot
  # include FactoryBot::Syntax::Methods

  # Add more helper methods to be used by all tests here...
  def switch_account(account)
    patch "/accounts/#{account.id}/switch"
  end

  def json_response
    JSON.parse(response.body)
  end

  setup do
    ActsAsTenant.current_tenant = accounts(:company)
  end

  teardown do
    ActsAsTenant.current_tenant = nil
  end
end

class ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
end
