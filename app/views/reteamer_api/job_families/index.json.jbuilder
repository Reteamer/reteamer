json.array! @job_families do |job_family|
  json.key(job_family.key)
  json.name(job_family.name)
end
