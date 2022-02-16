# frozen_string_literal: true

json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.chart do
  json.array! @team_chart do |team|
    json.id(team.key) # deprecated
    json.key(team.key)
    json.type(team.type)
    json.parentId(team.parent_key) # deprecated
    json.parentKey(team.parent_key)
    json.name(h(team.name))
    json.members team.members do |member|
      json.id(member.key) # deprecated
      json.key(member.key)
      json.type(member.type.parameterize)
      json.assignment_key(member.assignment_key)
      json.name(h(member.name))
      json.firstName(h(member.first_name))
      json.lastName(h(member.last_name))
      json.title(h(member.title.presence || member.job_family_name))
      json.job_family_id(member.job_family_id)
      json.supervisor_key(member.supervisor_key)
      json.image_url(member.image_url || "https://www.gravatar.com/avatar/?s=50")
      json.employee_id(member.employee_id) # deprecated
      json.employee_code(member.employee_id)
      json.type(member.type.demodulize.downcase)
      json.team_id(team.key) # deprecated
      json.team_key(team.key)
    end
  end
end
