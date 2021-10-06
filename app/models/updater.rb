class Updater
  def self.update(effective_at, entry, attributes)
    new_model = entry.versionable.dup
    new_model.assign_attributes(attributes)
    Entry.create(effective_at: effective_at, versionable: new_model, active: entry.active, key: entry.key)
  end

  def self.deactivate(effective_at, entry)
    new_model = entry.versionable.dup
    Entry.create(effective_at: effective_at, versionable: new_model, active: false, key: entry.key)
  end

  def self.activate(effective_at, entry)
    new_model = entry.versionable.dup
    Entry.create(effective_at: effective_at, versionable: new_model, active: true, key: entry.key)
  end
end
