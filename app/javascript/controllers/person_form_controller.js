import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "sectionOne", "sectionTwo", "sectionThree" ]

  handleDatePicked(event) {
    event.preventDefault();
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


    this.sectionOneTarget.classList.add("hidden")
    this.sectionTwoTarget.classList.remove("hidden")
  }

  handlePersonTypePicked(event) {
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
  }

  handleSubmit(event) {
    console.error("=============>", event);
  }

  connect() {
  }
}
