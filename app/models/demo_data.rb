class DemoData
  def self.create_consultancy(account, owner)
    software_engineer = JobFamily.create!(name: "Software Engineer")
    product_manager = JobFamily.create!(name: "Product Manager")
    product_designer = JobFamily.create!(name: "Product Designer")
    other = JobFamily.create!(name: "Other")

    # thanks https://namelix.com/
    account_team_entry = Entry.create(effective_at: Date.today, versionable: Team.new(name: account.name))
    tech_team_entry = Entry.create(effective_at: Date.today, versionable: Team.new(name: "Temcode", parent_key: account_team_entry.key))
    food_team_entry = Entry.create(effective_at: Date.today, versionable: Team.new(name: "Foodimal", parent_key: account_team_entry.key))
    car_team_entry = Entry.create(effective_at: Date.today, versionable: Team.new(name: "Automoco", parent_key: account_team_entry.key))

    grandboss_entry = Entry.create(effective_at: Date.today, versionable: People::Employee.new(first_name: owner.first_name, last_name: owner.last_name, email: owner.email, title: "Grandboss", job_family: other))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: account_team_entry.key, person_key: grandboss_entry.key))

    lk = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Lucien", last_name: "Klocko", title: "Junior Software Engineer", image_url: "/demo_avatars/cartoon/29.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: lk.key))
    mm = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Merideth", last_name: "McClure", title: "Software Engineer", image_url: "/demo_avatars/cartoon/12.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: mm.key))
    am = Entry.create(effective_at: Date.today, versionable: People::Contractor.new(first_name: "Arlie", last_name: "Mann", title: "Senior Software Engineer", image_url: "/demo_avatars/cartoon/34.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: am.key))
    ml = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Melissia", last_name: "Leffler", title: "Staff Software Engineer", image_url: "/demo_avatars/cartoon/43.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: ml.key))
    ts = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Tasha", last_name: "Stracke", title: "Product Manager", image_url: "/demo_avatars/cartoon/04.png", job_family: product_manager))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: ts.key))
    tl = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Trista", last_name: "Larkin", title: "Senior Product Designer", image_url: "/demo_avatars/cartoon/24.png", job_family: product_designer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: tech_team_entry.key, person_key: tl.key))

    zb = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Zach", last_name: "Boyer", title: "Junior Software Engineer", image_url: "/demo_avatars/cartoon/15.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: zb.key))
    bm = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Bryce", last_name: "Miller", title: "Junior Software Engineer", image_url: "/demo_avatars/cartoon/09.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: bm.key))
    sa = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Stefanie", last_name: "Aufderhar", title: "Software Engineer", image_url: "/demo_avatars/cartoon/22.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: sa.key))
    wz = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Willia", last_name: "Zemlak", title: "Senior Software Engineer", image_url: "/demo_avatars/cartoon/20.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: wz.key))
    et = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Elise", last_name: "Towne", title: "Senior Product Manager", image_url: "/demo_avatars/cartoon/14.png", job_family: product_manager))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: et.key))
    pd = Entry.create(effective_at: Date.today, versionable: People::OpenReq.new(supervisor_key: grandboss_entry.key, job_family: product_designer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: food_team_entry.key, person_key: pd.key))

    ky = Entry.create(effective_at: Date.today, versionable: People::Contractor.new(first_name: "Kim", last_name: "Yost", title: "Senior Software Engineer", image_url: "/demo_avatars/cartoon/10.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: car_team_entry.key, person_key: ky.key))
    so = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Steven", last_name: "Occupations", title: "Product Manager", image_url: "/demo_avatars/cartoon/17.png", job_family: product_manager))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: car_team_entry.key, person_key: so.key))
    md = Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Mia", last_name: "DuBuque", title: "Product Designer", image_url: "/demo_avatars/cartoon/44.png", job_family: product_designer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: car_team_entry.key, person_key: md.key))
    se = Entry.create(effective_at: Date.today, versionable: People::OpenReq.new(supervisor_key: grandboss_entry.key, job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: Assignment.new(team_key: car_team_entry.key, person_key: se.key))

    Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Chris", last_name: "Yundt", title: "Software Engineer", image_url: "/demo_avatars/cartoon/35.png", job_family: software_engineer))
    Entry.create(effective_at: Date.today, versionable: People::Employee.new(supervisor_key: grandboss_entry.key, first_name: "Rory", last_name: "Jacobson", title: "Product Designer", image_url: "/demo_avatars/cartoon/11.png", job_family: product_designer))
  end
end
