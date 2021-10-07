json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.people do
  json.array! @people do |person|
    json.id(person.key)
    json.parentId(person.supervisor_key)
    json.name(person.name)
    json.title(person.title)
    json.image_url(person.image_url || "https://www.gravatar.com/avatar/?s=50")
    json.employee_id(person.type == People::Contractor.name ? 'Contractor' : person.employee_id)
    json.isContractor(person.type == People::Contractor.name)
  end
end

json.connections do
  json.array! @connections do |connection|
    json.from(connection.person_key)
    json.to(connection.other_supervisor_key)
    json.label(connection.label)
  end
end
