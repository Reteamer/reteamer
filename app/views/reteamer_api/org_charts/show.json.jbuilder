json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.people do
  json.array! @people do |person|
    json.id(person.key) # deprecated
    json.key(person.key)
    json.type(person.type.parameterize)
    json.parentId(person.supervisor_key) # deprecated
    json.parentKey(person.supervisor_key)
    json.name(h(person.name))
    json.firstName(h(person.first_name))
    json.lastName(h(person.last_name))
    json.title(h(person.title))
    json.job_family(h(person.job_family_name))
    json.image_url(person.image_url || "https://www.gravatar.com/avatar/?s=50")
    json.employee_id(person.employee_id) # deprecated
    json.employee_code(person.employee_id)
    json.type(person.type.demodulize.downcase)
  end
end

json.connections do
  json.array! @connections do |connection|
    json.from(connection.person_key)
    json.to(connection.other_supervisor_key)
    json.label(connection.label)
  end
end
