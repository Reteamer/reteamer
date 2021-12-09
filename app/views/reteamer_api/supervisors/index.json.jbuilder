json.supervisors do
  json.array! @supervisors do |person|
    json.id(person.key)  # deprecated
    json.key(person.key)
    json.name(person.name)
  end
end
