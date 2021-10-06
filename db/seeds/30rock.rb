#
# People of 30 Rock
#
def peopleOfThirtyRock(account)
  ActsAsTenant.with_tenant(account) do
    ge      = Teams::Team.create_with_date(Date.current, name: "General Electric")
    nbc     = Teams::Team.create_with_date(Date.current, name: "East Coast Television and Microwave Oven Programming", parent_proto_id: ge.proto_id)
    tgs     = Teams::Team.create_with_date(Date.current, name: "The Girly Show (TGS)", parent_proto_id: nbc.proto_id)
    writers = Teams::Team.create_with_date(Date.current, name: "Writers", parent_proto_id: tgs.proto_id)
    actors  = Teams::Team.create_with_date(Date.current, name: "Actors", parent_proto_id: tgs.proto_id)
    entourage  = Teams::Team.create_with_date(Date.current, name: "Tracy's Entourage", parent_proto_id: actors.proto_id)

    jack    = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-279F0", first_name: "Jack", last_name: "Donaghy", title: "Vice President of East Coast Television and Microwave Oven Programming", image_url: "/demo_avatars/30_rock/jack.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: jack.key, team_id: nbc.proto_id)

    liz     = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-22B75", first_name: "Liz", last_name: "Lemon", title: "Head Writer", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/liz.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: liz.key, team_id: tgs.proto_id)
    Assignments::Assignment.create(Date.current, person_key: liz.key, team_id: writers.proto_id)

    pete    = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-386D3", first_name: "Pete", last_name: "Hornberger", title: "Producer", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/pete.png"))
    Assignments::Assignment.create(Date.current, person_key: pete.key, team_id: tgs.proto_id)

    jon     = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-981D7", first_name: "Jonathan", title: "Assistant", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/jonathan.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: jon.key, team_id: nbc.proto_id)

    # howard  = Entry.create(effective_at: Date.current, versionable: People::Person.create(6.weeks.from_now.to_date, first_name: "Howard", last_name: "Jorgensen", title: "Vice President of Locomotives")

    kenneth = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-435R2", first_name: "Kenneth", last_name: "Parcell", title: "Page", supervisor_key: pete.key, image_url: "/demo_avatars/30_rock/kenneth.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: kenneth.key, team_id: tgs.proto_id)
    Assignments::Assignment.create(Date.current, person_key: kenneth.key, team_id: entourage.proto_id)

    leo     = Entry.create(effective_at: 7.weeks.from_now.to_date, versionable: People::Person.create(employee_id: "HTH-555O0", first_name: "Leo", last_name: "Spaceman", title: "Quack Doctor", supervisor_key: jack.key, image_url: "/demo_avatars/30_rock/leo.jpeg"))
    Assignments::Assignment.create(7.weeks.from_now.to_date, person_key: leo.key, team_id: nbc.proto_id)

    tracy   = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-923H5", first_name: "Tracy", last_name: "Jordan", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/tracy.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: tracy.key, team_id: actors.proto_id)
    Assignments::Assignment.create(Date.current, person_key: tracy.key, team_id: entourage.proto_id)

    dotcom  = Entry.create(effective_at: Date.current, versionable: People::Person.create(first_name: "Walter \"Dot Com\"", last_name: "Slattery", title: "Entrepreneur", supervisor_key: tracy.key, contractor: true))
    Assignments::Assignment.create(Date.current, person_key: dotcom.key, team_id: entourage.proto_id)

    grizz   = Entry.create(effective_at: Date.current, versionable: People::Person.create(first_name: "Warren \"Grizz\"", last_name: "Griswald", title: "Talent Manager", supervisor_key: tracy.key, contractor: true))
    Assignments::Assignment.create(Date.current, person_key: grizz.key, team_id: entourage.proto_id)

    # Add a dotted line for Kenneth who is also part of Tracy's entourage
    errand_boy_connection = Entry.create(effective_at: Date.current, versionable: Connections::Connection.create(person_key: kenneth.key, other_supervisor_key: tracy.key, label: "Errand Boy"))

    jenna   = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-503Y2", first_name: "Jenna", last_name: "Maroney", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/jenna.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: jenna.key, team_id: actors.proto_id)

    josh    = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-684N0", first_name: "Josh", last_name: "Girard", title: "Actor/Writer", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/josh.png"))
    Assignments::Assignment.create(Date.current, person_key: josh.key, team_id: actors.proto_id)
    Assignments::Assignment.create(Date.current, person_key: josh.key, team_id: writers.proto_id)

    frank   = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-494T7", first_name: "Frank", last_name: "Rossitano", title: "Writer", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/frank.jpeg"))
    Assignments::Assignment.create(Date.current, person_key: frank.key, team_id: writers.proto_id)

    lutz    = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-747S3", first_name: "Johnny", last_name: "Lutz", title: "Writer", supervisor_key: liz.key))
    Assignments::Assignment.create(Date.current, person_key: lutz.key, team_id: writers.proto_id)

    toofer  = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-313V5", first_name: "Toofer", last_name: "Spurlock", title: "Writer", supervisor_key: liz.key))
    Assignments::Assignment.create(Date.current, person_key: toofer.key, team_id: writers.proto_id)

    cerie   = Entry.create(effective_at: Date.current, versionable: People::Person.create(employee_id: "NBC-8008S", first_name: "Cerie", last_name: "Xerox", title: "Assistant", supervisor_key: liz.key))
    Assignments::Assignment.create(Date.current, person_key: cerie.key, team_id: tgs.proto_id)

    don     = Entry.create(effective_at: 14.weeks.from_now.to_date, versionable: People::Person.create(employee_id: "GE-357R0", first_name: "Don", last_name: "Geiss", title: "CEO of General Electric", image_url: "/demo_avatars/30_rock/don.png"))
    Assignments::Assignment.create(14.weeks.from_now, person_key: don.key, team_id: ge.proto_id)

    jack = Updater.update(14.weeks.from_now.to_date, jack, supervisor_key: don.key)

    devon   = Entry.create(effective_at: 18.weeks.from_now.to_date, versionable: People::Person.create(employee_id: "NBC-64Y4K", first_name: "Devon", last_name: "Banks", title: "Vice President of West Coast News, Web Content, and Theme Park Talent Relations", supervisor_key: don.key, image_url: "/demo_avatars/30_rock/devon.jpeg"))
    nbc_west = Teams::Team.create_with_date(18.weeks.from_now.to_date, name: "West Coast News, Web Content, and Theme Park Talent Relations", parent_proto_id: ge.proto_id)
    Assignments::Assignment.create(18.weeks.from_now.to_date, person_key: devon.key, team_id: nbc_west.proto_id)
    # end of season 1

    # season 2
    lenny   = Entry.create(effective_at: 2.years.from_now.to_date, versionable: People::Person.create(first_name: "Lenny", last_name: "Wosniak", title: "Private Investigator", supervisor_key: jack.key, contractor: true, image_url: "/demo_avatars/30_rock/lenny.jpeg"))
    # end of season 2

    # season 3
    josh = Updater.deactivate(4.years.from_now.to_date, josh) # Josh leaves after season 3
    # end of season 3

    # season 4
    danny   = Entry.create(effective_at: 4.years.from_now.to_date, versionable: People::Person.create(employee_id: "NBC-488P8", first_name: "Danny", last_name: "Baker", title: "Actor", supervisor_key: liz.key, image_url: "/demo_avatars/30_rock/danny.jpeg"))
    Assignments::Assignment.create(4.years.from_now.to_date, person_key: danny.key, team_id: actors.proto_id)
    don = Updater.deactivate(5.years.from_now.to_date, don) # Geiss dies
    jack = Updater.update(5.years.from_now.to_date, jack, supervisor_key: nil)
    devon = Updater.deactivate(5.years.from_now.to_date, devon)
    # end of season 4

    # season 5
    hank    = Entry.create(effective_at: 5.years.from_now.to_date, versionable: People::Person.create(employee_id: "KBL-001", first_name: "Hank", last_name: "Hooper", title: "CEO Kabletown", image_url: "/demo_avatars/30_rock/hank.png"))
    kabletown = Teams::Team.create_with_date(5.years.from_now.to_date, name: "Kabletown")
    nbc = nbc.update_with_date(5.years.from_now.to_date, parent_proto_id: kabletown.proto_id)
    nbc_west = nbc_west.update_with_date(5.years.from_now.to_date, parent_proto_id: kabletown.proto_id)
    ge = ge.update_with_date(5.years.from_now.to_date, active:false)
    Assignments::Assignment.create(5.years.from_now.to_date, person_key: hank.key, team_id: kabletown.proto_id)

    jack = Updater.update(5.years.from_now.to_date, jack, supervisor_key: hank.key)
    angie = Entry.create(effective_at: 5.years.from_now.to_date, versionable: People::Person.create(first_name: "Angie", last_name: "Jordan", title: "Actor/Producer", supervisor_key: liz.key, contractor: true))
    # end of season 5

    josh = Updater.activate(6.years.from_now.to_date, josh) # Josh comes back for the season finale


  end
end
