require "capybara/rails"

class ComponentUnderTest
  class << self
    include Capybara::DSL
    include Minitest::Assertions
    include Rails.application.routes.url_helpers
  end
end
