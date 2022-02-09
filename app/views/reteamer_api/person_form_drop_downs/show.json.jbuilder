json.supervisors do
  json.array! @supervisors.select { |entry| !entry.versionable.is_a?(People::OpenReq) } do |person|
    json.key(person.key)
    json.name(person.versionable.name)
  end
end

json.teams do
  json.array! @teams do |team|
    json.key(team.key)
    json.name(team.versionable.name)
  end
end

json.job_families do
  json.array! @job_families do |job_family|
    json.key(job_family.key)
    json.name(job_family.versionable.name)
  end
end
