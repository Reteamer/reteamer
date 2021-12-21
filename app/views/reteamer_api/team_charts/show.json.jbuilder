# frozen_string_literal: true

json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.the_slack do
  json.array! @team_chart.the_slack do |person_entry|
    json.key(person_entry.key)
    json.name(person_entry.versionable.name)
    json.firstName(person_entry.versionable.first_name)
    json.lastName(person_entry.versionable.last_name)
    json.title(person_entry.versionable.title)
    json.type(person_entry.versionable.type.demodulize.downcase)
    json.employee_id(person_entry.versionable.employee_id)
  end
end

json.chart do
  json.array! @team_chart.teams do |team|
    json.id(team.key) # deprecated
    json.key(team.key)
    json.parentId(team.parent_key) # deprecated
    json.parentKey(team.parent_key)
    json.name(team.name)
    json.members team.members do |member|
      json.id(member.key) # deprecated
      json.key(member.key)
      json.assignment_key(member.assignment_key)
      json.name(member.name)
      json.firstName(member.first_name)
      json.lastName(member.last_name)
      json.title(member.title)
      json.image_url(member.image_url || "https://www.gravatar.com/avatar/?s=50")
      json.employee_id(member.employee_id) # deprecated
      json.employee_code(member.employee_id)
      json.type(member.type.demodulize.downcase)
      json.team_id(team.key) # deprecated
      json.team_key(team.key)
    end
  end
end
