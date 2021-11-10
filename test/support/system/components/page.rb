class Page
  class << self
    def query_string
      QueryString.new(URI.parse(Capybara.current_session.current_url).query)
    end
  end

  class QueryString
    def initialize(query_string)
      @query_string =  Rack::Utils.parse_nested_query(query_string)
    end

    def has_date?(expected_date)
      @query_string["effective_date"] == expected_date
    end

    def has_no_date?
      !@query_string.has_key?("effective_date")
    end
  end
end
