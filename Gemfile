source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "~> 3.0"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 6.1.4"
# Use postgresql as the database for Active Record
gem "pg"
# Use Puma as the app server
gem "puma", "~> 5.5"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.11"
# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.2", require: false

# Security update
gem "nokogiri", ">= 1.12.5"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails"
  gem "annotate"
  gem "brakeman", ">= 5.1.2"
  gem "bundler-audit", github: "rubysec/bundler-audit"
  gem "letter_opener_web", "~> 2.0"
  gem "standard"
  gem "factory_bot_rails"
  gem "zonebie"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem "web-console", ">= 3.3.0"
  gem "listen", "~> 3.2", ">= 3.2.1"
  # A fully configurable and extendable Git hook manager
  gem "overcommit"
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  # Easy installation and use of web drivers to run system tests with browsers
  gem "webdrivers"
end

gem "tzinfo-data"

# Jumpstart dependencies
gem "jumpstart", path: "lib/jumpstart", group: :omit

gem "acts_as_tenant", "~> 0.5.1"
gem "administrate", github: "excid3/administrate", branch: "jumpstart" # '~> 0.10.0'
gem "administrate-field-active_storage", "~> 0.3.0"
gem "attr_encrypted", "~> 3.1"
gem "cssbundling-rails", "~> 0.2.7"
gem "devise", ">= 4.7.1"
gem "deep_cloneable"
gem "devise-i18n", "~> 1.10"
gem "groupdate"
gem "hotwire-rails", "~> 0.1.2"
gem "image_processing", "~> 1.9", ">= 1.9.2"
gem "inline_svg", "~> 1.6"
gem "invisible_captcha", "~> 2.0"
gem "jsbundling-rails", "~> 0.2.2"
gem "local_time", "~> 2.1"
gem "name_of_person", "~> 1.0"
gem "noticed", "~> 1.5"
gem "oj", "~> 3.13"
gem "omniauth", "~> 2.0", ">= 2.0.4"
gem "omniauth-rails_csrf_protection", "~> 1.0"
gem "pagy", "~> 5.6"
gem "pay", "~> 3.0.23"
gem "pg_search", "~> 2.3"
gem "prefixed_ids", "~> 1.2"
gem "pretender", "~> 0.3.4"
gem "pundit", "~> 2.1"
gem "receipts", "~> 1.1.0"
gem "request_store"
gem "responders", github: "heartcombo/responders"
gem "rotp", "~> 6.2"
gem "rqrcode", "~> 2.1"
gem "ruby-oembed", "~> 0.15.0", require: "oembed"
gem "strong_migrations", "~> 0.7.6"
gem "whenever", "~> 1.0", require: false

# Jumpstart manages a few gems for us, so install them from the extra Gemfile
if File.exist?("config/jumpstart/Gemfile")
  eval_gemfile "config/jumpstart/Gemfile"
end
