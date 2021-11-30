class AccountLeader
  class << self
    delegate :visit_org_chart,
      :drag_person,
      to: OrgChartComponent

    delegate :visit_team_chart,
      :drag_team_member,
      to: TeamChartComponent

    delegate :deactivate_person,
      to: ChartComponent

    delegate :visit_effective_date_fields_style_guide,
      :select_custom_date,
      to: EffectiveDateFields

    delegate :visit_date_navigator_style_guide,
      :clicks_on_future_date,
      :hover_on,
      :enters_future_date,
      to: DateNavigatorComponent

    delegate :make_new_proposal,
      :make_new_team,
      to: FloatingActionMenuComponent

    delegate :switch_to_proposal,
      to: ProposalNavigatorComponent
  end
end
