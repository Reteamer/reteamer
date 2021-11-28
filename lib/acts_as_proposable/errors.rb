module ActsAsProposable
  class Error < StandardError
  end

  module Errors
    class ModelNotScopedByProposable < ActsAsProposable::Error
    end

    class NoProposableSet < ActsAsProposable::Error
    end

    class ProposableIsImmutable < ActsAsProposable::Error
    end
  end
end
