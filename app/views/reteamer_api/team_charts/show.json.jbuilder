# frozen_string_literal: true

json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.chart do
  json.array! @team_chart do |team|
    json.id(team.key)
    json.parentId(team.parent_key)
    json.name(team.name)
    json.members team.members do |member|
      json.id(member.key)
      json.assignment_key(member.assignment_key)
      json.name(member.name)
      json.title(member.title)
      json.image_url(member.image_url || "https://www.gravatar.com/avatar/?s=50")
      json.employee_id(member.employee_id)
      json.type(member.type.demodulize.downcase)
      json.team_id(team.key)
    end
  end
end
