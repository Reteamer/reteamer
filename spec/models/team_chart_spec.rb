require "rails_helper"

describe TeamChart do
  it "gets the teams and people for the specified date" do
    avengers = Team.create(Date.current, name: "Avengers")
    west_coast_avengers = Team.create(3.days.from_now.to_date, name: "West Coast Avengers", parent_id: avengers.id)
    Team.create(Date.current, name: "Great Lakes Avengers", parent_id: avengers.id)

    iron_man = People::Person.create_with_date(Date.current, first_name: "Iron", last_name: "Man")
    Assignment.create(Date.current, person_key: iron_man.id, team_id: avengers.id)

    hawkeye = People::Person.create_with_date(Date.current, first_name: "Hawkeye")
    Assignment.create(Date.current, person_key: hawkeye.id, team_id: avengers.id)
    expect { Assignment.create(Date.current, person_key: hawkeye.id, team_id: west_coast_avengers.id) }.to raise_error("Can't assign person to team that doesn't exist yet")

    team_chart = TeamChart.find_for(Date.current)
    p team_chart.map(&:name)
    expect(team_chart.count).to eq(4)
  end

  it "gets all the types of People" do
    avengers = Entry.create(effective_at: Date.current, versionable: Team.create(name: "Avengers"))

    iron_man = Entry.create(effective_at: Date.current, versionable: People::Person.create(first_name: "Iron", last_name: "Man"))
    Entry.create(effective_at: Date.current, versionable: Assignment.create(person_key: iron_man.key, team_key: avengers.key))

    open_req = Entry.create(effective_at: Date.current, versionable: People::OpenReq.create(title: "Hero"))
    Entry.create(effective_at: Date.current, versionable: Assignment.create(person_key: open_req.key, team_key: avengers.key))

    team_chart = TeamChart.find_for(Date.current)
    expect(team_chart.count).to eq(1)
    expect(team_chart.first.members).to match_array([iron_man.versionable, open_req.versionable])
  end
end
