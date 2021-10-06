json.current_date(@current_date)

json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.chart do
  json.array! @team_chart do |t|
    json.id(t.id)
    json.parentId(t.parent_id)
    json.name(t.name)
    json.members t.members do |m|
      json.id(m.assignee.proto_id)
      json.parentId(m.assigned_team.id)
      json.name(m.assignee.name)
      json.title(m.assignee.title)
      json.image_url(m.assignee.image_url || "https://www.gravatar.com/avatar/?s=50")
      json.employee_id(m.assignee.contractor ? 'Contractor' : m.assignee.employee_id)
      json.isContractor(m.assignee.contractor?)
    end
  end
end

