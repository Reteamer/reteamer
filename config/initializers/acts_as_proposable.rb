# ActsAsTenant configuration - https://github.com/excid3/acts_as_tenant
# Use this to configure how multitenancy works if you're using it.

require_relative "../../lib/acts_as_proposable/acts_as_proposable"
require_relative "../../lib/acts_as_proposable/sidekiq" if defined? Sidekiq

ActsAsProposable.configure do |config|
  config.require_proposal = true
end
