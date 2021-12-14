import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "sectionOne", "sectionTwo", "sectionThree" ]

  handlePersonEdit(event) {
    this.resetWizard();

    this.person = event.detail.person
    this.element.querySelector("input[name='first_name']").value = this.person.firstName
    this.element.querySelector("input[name='last_name']").value = this.person.lastName
    this.element.querySelector("input[name='employee_id']").value = this.person.employee_id
    this.element.querySelector("input[name='title']").value = this.person.title
    this.element.querySelector("input[name='email']").value = this.person.email || ""
    this.element.querySelector("supervisor-form-group").classList.add("hidden");
    this.element.querySelector("team-form-group").classList.add("hidden");

    this.callback = event.detail.callback
  }

  handleNewPerson(event) {
    this.resetWizard();
  }

  resetWizard() {
    this.element.querySelector("#person-form").reset()
    this.element.querySelector("supervisor-form-group").classList.remove("hidden");
    this.element.querySelector("team-form-group").classList.remove("hidden");
    this.sectionOneTarget.classList.remove("hidden")
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.add("hidden")
    this.person = null;
    this.callback = () => {}
  }

  isNewRecord() {
    return !this.person;
  }

  handleDatePicked(event) {
    event.preventDefault();
    if(this.isNewRecord()) {
      const selected_date = document.querySelector("#person-form input[name='effective_at']").value
      fetch(`/reteamer_api/supervisors.json?effective_date=${selected_date}`).then((response) => {
        response.json().then((data) => {
          const select = document.querySelector("#person-form select[name='supervisor_key']")
          const sortedSupervisors = data.supervisors.sort((supervisor, other) => supervisor.name.localeCompare(other.name))
          sortedSupervisors.forEach((supervisor) => {
            let option = document.createElement('option')
            option.value = supervisor.id
            option.text = supervisor.name
            select.appendChild(option)
          })
        })
      })

      fetch(`/reteamer_api/teams.json?effective_date=${selected_date}`).then((response) => {
        response.json().then((data) => {
          const select = document.querySelector("#person-form select[name='team_key']")
          const sortedTeams = data.teams.sort((team, other) => team.name.localeCompare(other.name))
          sortedTeams.forEach((team) => {
            let option = document.createElement('option')
            option.value = team.id
            option.text = team.name
            select.appendChild(option)
          })
        })
      })
    }

    this.sectionOneTarget.classList.add("hidden")
    if(this.isNewRecord()) {
      this.sectionTwoTarget.classList.remove("hidden")
    } else {
      this.sectionThreeTarget.classList.remove("hidden")
    }
  }

  handlePersonTypePicked(event) {
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
  }

  handleSubmit(event) {
    this.callback(effectiveDate, newPersonAttributes)
  }

  connect() {
  }
}
