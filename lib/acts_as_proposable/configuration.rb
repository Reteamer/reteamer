module ActsAsProposable
  class Configuration
    attr_writer :require_proposal, :pkey

    def require_proposal
      @require_proposal ||= false
    end

    def pkey
      @pkey ||= :id
    end
  end
end
