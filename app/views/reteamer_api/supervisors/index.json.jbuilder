json.supervisors do
  json.array! @supervisors do |person|
    json.id(person.key)
    json.name(person.name)
  end
end
