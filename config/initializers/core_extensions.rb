require_relative "../../lib/core_extensions/string"
require_relative "../../lib/core_extensions/date"

String.include CoreExtensions::String
Date.include CoreExtensions::Date
