class AccountLeader
  class << self
    delegate :visit_org_chart,
      :drag,
      to: OrgChartComponent

    delegate :select_custom_date,
      to: EffectiveDateSelector

    delegate :clicks_on_future_date,
      :hover_on,
      :enters_future_date,
      to: DateNavigatorComponent
  end
end
