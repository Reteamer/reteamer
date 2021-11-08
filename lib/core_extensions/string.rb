module CoreExtensions
  module String
    def to_bool
      ActiveModel::Type::Boolean.new.cast(downcase.strip)
    end
  end
end
