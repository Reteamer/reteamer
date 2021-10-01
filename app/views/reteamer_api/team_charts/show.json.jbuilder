json.current_date(@current_date)

json.histogram do
  json.array! @histogram do |h|
    json.date(h.date)
    json.value(h.value)
  end
end

json.chart do
  json.array! @team_chart do |t|
    if t.is_a?(Teams::Team)
      json.id(t.id)
      json.parentId(t.parent_id)
      json.name(t.name)
      json.type("team")
    elsif t.is_a?(TeamChart::Assignee)
      json.id(t.assignee.id)
      json.parentId(t.assigned_team.id)
      json.name(t.assignee.name)
      json.image_url(t.assignee.image_url || "https://www.gravatar.com/avatar/?s=50")
      json.employee_id(t.assignee.contractor ? '' : t.assignee.employee_id)
      json.isContractor(t.assignee.contractor?)
      json.type("person")
    end
  end
end

