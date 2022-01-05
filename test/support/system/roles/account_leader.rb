class AccountLeader
  class << self
    delegate :visit_org_chart,
      :drag_person,
      to: OrgChartComponent

    delegate :visit_team_chart,
      :drag_team,
      :drag_team_member,
      :edit_team,
      :deactivate_team,
      to: TeamChartComponent

    delegate :deactivate_person,
      :edit_person,
      to: ChartComponent

    delegate :visit_effective_date_fields_style_guide,
      :select_custom_date,
      to: EffectiveDateFields

    delegate :visit_date_navigator_style_guide,
      :clicks_weeks_in_future,
      :hover_on,
      :enters_future_date,
      to: DateNavigatorComponent

    delegate :make_new_proposal,
      :make_new_team,
      :make_new_person,
      to: FloatingActionMenuComponent

    delegate :switch_to_proposal,
      to: ProposalNavigatorComponent
  end
end
