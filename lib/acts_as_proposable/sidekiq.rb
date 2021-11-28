module ActsAsProposable::Sidekiq
  # Get the current plan and store in the message to be sent to Sidekiq.
  class Client
    def call(_worker_class, msg, _queue, _redis_pool)
      if ActsAsProposable.current_proposal.present?
        msg["acts_as_plan"] ||=
          {
            "class" => ActsAsProposable.current_proposal.class.name,
            "id" => ActsAsProposable.current_proposal.id
          }
      end

      yield
    end
  end

  # Pull the plan out and run the current thread with it.
  class Server
    def call(worker_class, msg, queue)
      if msg.has_key?("acts_as_plan")
        plan = msg["acts_as_plan"]["class"].constantize.find msg["acts_as_plan"]["id"]
        ActsAsProposable.with_proposal plan do
          yield
        end
      else
        yield
      end
    end
  end
end

Sidekiq.configure_client do |config|
  config.client_middleware do |chain|
    chain.add ActsAsProposable::Sidekiq::Client
  end
end

Sidekiq.configure_server do |config|
  config.client_middleware do |chain|
    chain.add ActsAsProposable::Sidekiq::Client
  end
  config.server_middleware do |chain|
    if defined?(Sidekiq::Middleware::Server::RetryJobs)
      chain.insert_before Sidekiq::Middleware::Server::RetryJobs, ActsAsProposable::Sidekiq::Server
    elsif defined?(Sidekiq::Batch::Server)
      chain.insert_before Sidekiq::Batch::Server, ActsAsProposable::Sidekiq::Server
    else
      chain.add ActsAsProposable::Sidekiq::Server
    end
  end
end
