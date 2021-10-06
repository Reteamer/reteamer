def add_episode(e, episodes, season)
  key = "s" + season.to_s + "e" + e.to_s.rjust(2, "0")
  episodes[key.to_sym] = @episode_counter.weeks.from_now.to_date
  @episode_counter += 1
end

#
# People of 30 Rock
#
def peopleOfThirtyRock(account)
  episodes = {}
  @episode_counter = 1
  (1..21).each{ |e| add_episode(e, episodes, 1) }
  (1..15).each{ |e| add_episode(e, episodes, 2) }
  (1..22).each{ |e| add_episode(e, episodes, 3) }
  (1..22).each{ |e| add_episode(e, episodes, 4) }
  (1..23).each{ |e| add_episode(e, episodes, 5) }
  (1..22).each{ |e| add_episode(e, episodes, 6) }
  (1..13).each{ |e| add_episode(e, episodes, 7) }
  episodes[:special] = @episode_counter.weeks.from_now.to_date

  ActsAsTenant.with_tenant(account) do
    ge      = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "General Electric"))
    nbc     = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "East Coast Television and Microwave Oven Programming", parent_key: ge.key))
    tgs     = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "The Girly Show (TGS)", parent_key: nbc.key))
    writers = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "Writers", parent_key: tgs.key))
    actors  = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "Actors", parent_key: tgs.key))
    entourage  = Entry.create(effective_at: episodes[:s1e01], versionable: Team.create(name: "Tracy's Entourage", parent_key: actors.key))

    jack    = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-279F0", first_name: "Jack", last_name: "Donaghy", title: "Vice President of East Coast Television and Microwave Oven Programming", image_url: "/demo_avatars/30_rock/jack.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: jack.key, team_key: nbc.key))

    liz     = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-22B75", first_name: "Liz", last_name: "Lemon", title: "Head Writer", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/liz.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: liz.key, team_key: tgs.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: liz.key, team_key: writers.key))

    pete    = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-386D3", first_name: "Pete", last_name: "Hornberger", title: "Producer", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/pete.png"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: pete.key, team_key: tgs.key))

    jon     = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-981D7", first_name: "Jonathan", title: "Assistant", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/jonathan.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: jon.key, team_key: nbc.key))

    # howard  = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(6.weeks.from_now.to_date, first_name: "Howard", last_name: "Jorgensen", title: "Vice President of Locomotives")

    kenneth = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-435R2", first_name: "Kenneth", last_name: "Parcell", title: "Page", supervisor_key: pete.key, image_url: "/demo_avatars/30_rock/kenneth.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: kenneth.key, team_key: tgs.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: kenneth.key, team_key: entourage.key))

    leo     = Entry.create(effective_at: episodes[:s1e07], versionable: People::Person.create(employee_id: "HTH-555O0", first_name: "Leo", last_name: "Spaceman", title: "Quack Doctor", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/leo.jpeg"))
    Entry.create(effective_at: episodes[:s1e07], versionable: Assignment.create(person_key: leo.key, team_key: nbc.key))

    tracy   = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-923H5", first_name: "Tracy", last_name: "Jordan", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/tracy.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: tracy.key, team_key: actors.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: tracy.key, team_key: entourage.key))

    dotcom  = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(first_name: "Walter \"Dot Com\"", last_name: "Slattery", title: "Entrepreneur", supervisor_key: tracy.key, contractor: true))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: dotcom.key, team_key: entourage.key))

    grizz   = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(first_name: "Warren \"Grizz\"", last_name: "Griswald", title: "Talent Manager", supervisor_key: tracy.key, contractor: true))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: grizz.key, team_key: entourage.key))

    # Add a dotted line for Kenneth who is also part of Tracy's entourage
    errand_boy_connection = Entry.create(effective_at: episodes[:s1e01], versionable: Connection.create(person_key: kenneth.key, other_supervisor_key: tracy.key, label: "Errand Boy"))

    jenna   = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-503Y2", first_name: "Jenna", last_name: "Maroney", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/jenna.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: jenna.key, team_key: actors.key))

    josh    = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-684N0", first_name: "Josh", last_name: "Girard", title: "Actor/Writer", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/josh.png"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: josh.key, team_key: actors.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: josh.key, team_key: writers.key))

    frank   = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-494T7", first_name: "Frank", last_name: "Rossitano", title: "Writer", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/frank.jpeg"))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: frank.key, team_key: writers.key))

    lutz    = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-747S3", first_name: "Johnny", last_name: "Lutz", title: "Writer", supervisor_key: liz.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: lutz.key, team_key: writers.key))

    toofer  = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-313V5", first_name: "Toofer", last_name: "Spurlock", title: "Writer", supervisor_key: liz.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: toofer.key, team_key: writers.key))

    cerie   = Entry.create(effective_at: episodes[:s1e01], versionable: People::Person.create(employee_id: "NBC-8008S", first_name: "Cerie", last_name: "Xerox", title: "Assistant", supervisor_key: liz.key))
    Entry.create(effective_at: episodes[:s1e01], versionable: Assignment.create(person_key: cerie.key, team_key: tgs.key))

    don     = Entry.create(effective_at: episodes[:s1e14], versionable: People::Person.create(employee_id: "GE-357R0", first_name: "Don", last_name: "Geiss", title: "CEO of General Electric", image_url: "/demo_avatars/30_rock/don.png"))
    Entry.create(effective_at: episodes[:s1e14], versionable: Assignment.create(person_key: don.key, team_key: ge.key))

    jack = Updater.update(episodes[:s1e14], jack, supervisor_key: don.key)

    devon   = Entry.create(effective_at: episodes[:s1e18], versionable: People::Person.create(employee_id: "NBC-64Y4K", first_name: "Devon", last_name: "Banks", title: "Vice President of West Coast News, Web Content, and Theme Park Talent Relations", supervisor_key: don.key, image_url: "/demo_avatars/30_rock/devon.jpeg"))
    nbc_west = Entry.create(effective_at: episodes[:s1e18], versionable: Team.create(name: "West Coast News, Web Content, and Theme Park Talent Relations", parent_key: ge.key))
    Entry.create(effective_at: episodes[:s1e14], versionable: Assignment.create(person_key: devon.key, team_key: nbc_west.key))

    # season 2
    lenny   = Entry.create(effective_at: episodes[:s2e03], versionable: People::Person.create(first_name: "Lenny", last_name: "Wosniak", title: "Private Investigator", supervisor_key: jack.key, contractor: true, image_url: "/demo_avatars/30_rock/lenny.jpeg"))
    #TODO: Jack leaves for Washington

    # season 3
    #TODO: Kathy is the interim CEO of GE

    # season 4
    josh = Updater.deactivate(episodes[:s4e01], josh) # Josh leaves after season 3
    actor_req = Entry.create(effective_at: episodes[:s4e01], versionable: People::OpenReq.create(title: "Actor", supervisor_key: liz.key))
    actor_req_assignment = Entry.create(effective_at: episodes[:s4e01], versionable: Assignment.create(person_key: actor_req, team_key: actors.key))
    danny   = Entry.create(effective_at: episodes[:s4e05], versionable: People::Person.create(employee_id: "NBC-488P8", first_name: "Danny", last_name: "Baker", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/danny.jpeg"))
    Entry.create(effective_at: episodes[:s4e05], versionable: Assignment.create(person_key: danny.key, team_key: actors.key))
    Updater.deactivate(episodes[:s4e05], actor_req)
    Updater.deactivate(episodes[:s4e05], actor_req_assignment)

    don = Updater.deactivate(episodes[:s4e14], don) # Geiss dies
    # TODO: open req?
    jack = Updater.update(episodes[:s4e14], jack, supervisor_key: nil)
    devon = Updater.deactivate(episodes[:s4e14], devon)
    nbc_west = Updater.deactivate(episodes[:s4e14], nbc_west)
    # TODO: Dealbreaker show?

    # season 5
    kabletown = Entry.create(effective_at: episodes[:s5e12], versionable: Team.create(name: "Kabletown"))
    nbc = Updater.update(episodes[:s5e12], nbc, parent_key: kabletown.key)
    nbc_west = Updater.update(episodes[:s5e12], nbc_west, parent_key: kabletown.key)
    ge = Updater.deactivate(episodes[:s5e12], ge)
    hank    = Entry.create(effective_at: episodes[:s5e13], versionable: People::Person.create(employee_id: "KBL-001", first_name: "Hank", last_name: "Hooper", title: "CEO Kabletown", image_url: "/demo_avatars/30_rock/hank.png"))
    Entry.create(effective_at: episodes[:s5e13], versionable: Assignment.create(person_key: hank.key, team_key: kabletown.key))

    jack = Updater.update(episodes[:s5e13], jack, supervisor_key: hank.key)
    angie = Entry.create(effective_at: episodes[:s5e11], versionable: People::Person.create(first_name: "Angie", last_name: "Jordan", title: "Actor/Producer", supervisor_key: liz.key, contractor: true))
    qoj = Entry.create(effective_at: episodes[:s5e11], versionable: Team.create(name: "Queen of Jordan", parent_key: nbc.key))
    Entry.create(effective_at: episodes[:s5e11], versionable: Assignment.create(person_key: angie.key, team_key: qoj.key))

    #TODO: Kaylee Hooper s5e16
  end
end
