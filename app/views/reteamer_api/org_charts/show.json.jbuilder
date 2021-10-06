json.current_date(@current_date)
json.histogram do
  json.array! @histogram do |h|
    json.date(h[:date])
    json.value(h[:value])
  end
end

json.people do
  json.array! @people do |person|
    json.id(person.proto_id)
    json.parentId(person.supervisor_proto_id)
    json.name(person.name)
    json.title(person.title)
    json.image_url(person.image_url || "https://www.gravatar.com/avatar/?s=50")
    json.employee_id(person.contractor ? '' : person.employee_id)
    json.isContractor(person.contractor?)
  end
end

json.connections do
  json.array! @connections do |connection|
    json.from(connection.person_id)
    json.to(connection.other_supervisor_id)
    json.label(connection.label)
  end
end
