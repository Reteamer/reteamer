class AccountLeader
  class << self
    delegate :visit_org_chart,
      to: OrgChartComponent
    delegate :clicks_on_future_date,
      :hover_on,
      :enters_future_date,
      to: DateNavigatorComponent
  end
end
