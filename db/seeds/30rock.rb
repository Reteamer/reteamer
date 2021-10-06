#
# People of 30 Rock
#
def peopleOfThirtyRock(account)
  ActsAsTenant.with_tenant(account) do
    ge      = Teams::Team.create(Date.current, name: "General Electric")
    nbc     = Teams::Team.create(Date.current, name: "East Coast Television and Microwave Oven Programming", parent_id: ge.id)
    tgs     = Teams::Team.create(Date.current, name: "The Girly Show (TGS)", parent_id: nbc.id)
    writers = Teams::Team.create(Date.current, name: "Writers", parent_id: tgs.id)
    actors  = Teams::Team.create(Date.current, name: "Actors", parent_id: tgs.id)
    entourage  = Teams::Team.create(Date.current, name: "Tracy's Entourage", parent_id: actors.id)

    jack    = People::Person.create_with_date(Date.current, employee_id: "NBC-279F0", first_name: "Jack", last_name: "Donaghy", title: "Vice President of East Coast Television and Microwave Oven Programming", image_url: "/demo_avatars/30_rock/jack.jpeg")
    Assignments::Assignment.create(Date.current, person_id: jack.proto_id, team_id: nbc.id)

    liz     = People::Person.create_with_date(Date.current, employee_id: "NBC-22B75", first_name: "Liz", last_name: "Lemon", title: "Head Writer", supervisor_proto_id: jack.proto_id, image_url: "/demo_avatars/30_rock/liz.jpeg")
    Assignments::Assignment.create(Date.current, person_id: liz.proto_id, team_id: tgs.id)
    Assignments::Assignment.create(Date.current, person_id: liz.proto_id, team_id: writers.id)

    pete    = People::Person.create_with_date(Date.current, employee_id: "NBC-386D3", first_name: "Pete", last_name: "Hornberger", title: "Producer", supervisor_proto_id: jack.proto_id, image_url: "/demo_avatars/30_rock/pete.png")
    Assignments::Assignment.create(Date.current, person_id: pete.proto_id, team_id: tgs.id)

    jon     = People::Person.create_with_date(Date.current, employee_id: "NBC-981D7", first_name: "Jonathan", title: "Assistant", supervisor_proto_id: jack.proto_id, image_url: "/demo_avatars/30_rock/jonathan.jpeg")
    Assignments::Assignment.create(Date.current, person_id: jon.proto_id, team_id: nbc.id)

    # howard  = People::Person.create(6.weeks.from_now.to_date, first_name: "Howard", last_name: "Jorgensen", title: "Vice President of Locomotives")

    kenneth = People::Person.create_with_date(Date.current, employee_id: "NBC-435R2", first_name: "Kenneth", last_name: "Parcell", title: "Page", supervisor_proto_id: pete.proto_id, image_url: "/demo_avatars/30_rock/kenneth.jpeg")
    Assignments::Assignment.create(Date.current, person_id: kenneth.proto_id, team_id: tgs.id)
    Assignments::Assignment.create(Date.current, person_id: kenneth.proto_id, team_id: entourage.id)

    leo     = People::Person.create_with_date(7.weeks.from_now.to_date, employee_id: "HTH-555O0", first_name: "Leo", last_name: "Spaceman", title: "Quack Doctor", supervisor_proto_id: jack.proto_id, image_url: "/demo_avatars/30_rock/leo.jpeg")
    Assignments::Assignment.create(7.weeks.from_now.to_date, person_id: leo.proto_id, team_id: nbc.id)

    tracy   = People::Person.create_with_date(Date.current, employee_id: "NBC-923H5", first_name: "Tracy", last_name: "Jordan", title: "Actor", supervisor_proto_id: liz.proto_id, image_url: "/demo_avatars/30_rock/tracy.jpeg")
    Assignments::Assignment.create(Date.current, person_id: tracy.proto_id, team_id: actors.id)
    Assignments::Assignment.create(Date.current, person_id: tracy.proto_id, team_id: entourage.id)

    dotcom  = People::Person.create_with_date(Date.current, first_name: "Walter \"Dot Com\"", last_name: "Slattery", title: "Entrepreneur", supervisor_proto_id: tracy.proto_id, contractor: true)
    Assignments::Assignment.create(Date.current, person_id: dotcom.proto_id, team_id: entourage.id)

    grizz   = People::Person.create_with_date(Date.current, first_name: "Warren \"Grizz\"", last_name: "Griswald", title: "Talent Manager", supervisor_proto_id: tracy.proto_id, contractor: true)
    Assignments::Assignment.create(Date.current, person_id: grizz.proto_id, team_id: entourage.id)

    # Add a dotted line for Kenneth who is also part of Tracy's entourage
    errand_boy_connection = Connections::Connection.create(Date.current, person_id: kenneth.proto_id, other_supervisor_id: tracy.proto_id, label: "Errand Boy")

    jenna   = People::Person.create_with_date(Date.current, employee_id: "NBC-503Y2", first_name: "Jenna", last_name: "Maroney", title: "Actor", supervisor_proto_id: liz.proto_id, image_url: "/demo_avatars/30_rock/jenna.jpeg")
    Assignments::Assignment.create(Date.current, person_id: jenna.proto_id, team_id: actors.id)

    josh    = People::Person.create_with_date(Date.current, employee_id: "NBC-684N0", first_name: "Josh", last_name: "Girard", title: "Actor/Writer", supervisor_proto_id: liz.proto_id, image_url: "/demo_avatars/30_rock/josh.png")
    Assignments::Assignment.create(Date.current, person_id: josh.proto_id, team_id: actors.id)
    Assignments::Assignment.create(Date.current, person_id: josh.proto_id, team_id: writers.id)

    frank   = People::Person.create_with_date(Date.current, employee_id: "NBC-494T7", first_name: "Frank", last_name: "Rossitano", title: "Writer", supervisor_proto_id: liz.proto_id, image_url: "/demo_avatars/30_rock/frank.jpeg")
    Assignments::Assignment.create(Date.current, person_id: frank.proto_id, team_id: writers.id)

    lutz    = People::Person.create_with_date(Date.current, employee_id: "NBC-747S3", first_name: "Johnny", last_name: "Lutz", title: "Writer", supervisor_proto_id: liz.proto_id)
    Assignments::Assignment.create(Date.current, person_id: lutz.proto_id, team_id: writers.id)

    toofer  = People::Person.create_with_date(Date.current, employee_id: "NBC-313V5", first_name: "Toofer", last_name: "Spurlock", title: "Writer", supervisor_proto_id: liz.proto_id)
    Assignments::Assignment.create(Date.current, person_id: toofer.proto_id, team_id: writers.id)

    cerie   = People::Person.create_with_date(Date.current, employee_id: "NBC-8008S", first_name: "Cerie", last_name: "Xerox", title: "Assistant", supervisor_proto_id: liz.proto_id)
    Assignments::Assignment.create(Date.current, person_id: cerie.proto_id, team_id: tgs.id)

    don     = People::Person.create_with_date(14.weeks.from_now.to_date, employee_id: "GE-357R0", first_name: "Don", last_name: "Geiss", title: "CEO of General Electric", image_url: "/demo_avatars/30_rock/don.png")
    Assignments::Assignment.create(14.weeks.from_now, person_id: don.proto_id, team_id: ge.id)

    jack = jack.update(14.weeks.from_now.to_date, supervisor_proto_id: don.proto_id)

    devon   = People::Person.create_with_date(18.weeks.from_now.to_date, employee_id: "NBC-64Y4K", first_name: "Devon", last_name: "Banks", title: "Vice President of West Coast News, Web Content, and Theme Park Talent Relations", supervisor_proto_id: don.proto_id,image_url: "/demo_avatars/30_rock/devon.jpeg")
    nbc_west = Teams::Team.create(18.weeks.from_now.to_date, name: "West Coast News, Web Content, and Theme Park Talent Relations", parent_id: ge.id)
    Assignments::Assignment.create(18.weeks.from_now.to_date, person_id: devon.proto_id, team_id: nbc_west.id)
    # end of season 1

    # season 2
    lenny   = People::Person.create_with_date(2.years.from_now.to_date, first_name: "Lenny", last_name: "Wosniak", title: "Private Investigator", supervisor_proto_id: jack.proto_id, contractor: true, image_url: "/demo_avatars/30_rock/lenny.jpeg")
    # end of season 2

    # season 3
    josh = josh.update(4.years.from_now.to_date, active: false) # Josh leaves after season 3
    # end of season 3

    # season 4
    danny   = People::Person.create_with_date(4.years.from_now.to_date, employee_id: "NBC-488P8", first_name: "Danny", last_name: "Baker", title: "Actor", supervisor_proto_id: liz.proto_id, image_url: "/demo_avatars/30_rock/danny.jpeg")
    Assignments::Assignment.create(4.years.from_now.to_date, person_id: danny.proto_id, team_id: actors.id)
    don = don.update(5.years.from_now.to_date, active: false) # Geiss dies
    jack = jack.update(5.years.from_now.to_date, supervisor_proto_id: nil)
    devon = devon.update(5.years.from_now.to_date, active: false)
    # end of season 4

    # season 5
    hank    = People::Person.create_with_date(5.years.from_now.to_date, employee_id: "KBL-001", first_name: "Hank", last_name: "Hooper", title: "CEO Kabletown", image_url: "/demo_avatars/30_rock/hank.png")
    kabletown = Teams::Team.create(5.years.from_now.to_date, name: "Kabletown")
    nbc = nbc.update(5.years.from_now.to_date, parent_id: kabletown.id)
    nbc_west = nbc_west.update(5.years.from_now.to_date, parent_id: kabletown.id)
    ge = ge.update(5.years.from_now.to_date, active:false)
    Assignments::Assignment.create(5.years.from_now.to_date, person_id: hank.proto_id, team_id: kabletown.id)

    jack = jack.update(5.years.from_now.to_date, supervisor_proto_id: hank.proto_id)
    angie = People::Person.create_with_date(5.years.from_now.to_date, first_name: "Angie", last_name: "Jordan", title: "Actor/Producer", supervisor_proto_id: liz.proto_id, contractor: true)
    # end of season 5

    josh = josh.update(6.years.from_now.to_date, active: true) # Josh comes back for the season finale


  end
end
