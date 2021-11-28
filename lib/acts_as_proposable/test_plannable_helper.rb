module ActsAsProposable
  class TestProposableMiddleware
    def initialize(app)
      @app = app
    end

    def call(env)
      previously_set_test_proposal = ActsAsProposable.test_proposal
      ActsAsProposable.test_proposal = nil
      @app.call(env)
    ensure
      ActsAsProposable.test_proposal = previously_set_test_proposal
    end
  end
end
