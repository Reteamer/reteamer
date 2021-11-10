class OrgChartComponent < ComponentUnderTest
  class << self
    def visit_org_chart
      visit org_chart_path
      assert_selector("text", text: "Jack Donaghy")
    end

    def future_people_selector
      ["text", text: "Howard Jorgensen"]
    end
  end
end
