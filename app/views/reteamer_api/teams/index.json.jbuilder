json.teams do
  json.array! @teams do |team|
    json.id(team.key)
    json.name(team.name)
  end
end
