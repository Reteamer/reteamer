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
      :deactivate_open_req,
      :edit_person,
      to: ChartComponent

    delegate :visit_effective_date_fields_style_guide,
      :select_custom_date,
      :select_selected_date,
      to: EffectiveDateFields

    delegate :visit_date_navigator_style_guide,
      :clicks_weeks_in_future,
      :enters_future_date_using_input,
      to: DateNavigatorComponent

    delegate :make_new_proposal,
      :make_new_team,
      :make_new_person,
      :make_new_open_req,
      to: FloatingActionMenuComponent

    delegate :switch_to_proposal,
      to: ProposalNavigatorComponent
  end
end
