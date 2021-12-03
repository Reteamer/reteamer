import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "sectionOne", "sectionTwo" ]

  handleDatePicked(event) {
    event.preventDefault();
    const selected_date = document.querySelector("#team-form input[name='effective_at']").value

    fetch(`/reteamer_api/teams.json?effective_date=${selected_date}`).then((response) => {
      response.json().then((data) => {
        const select = document.querySelector("#team-form select[name='parent_key']")
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

  handleSubmit(event) {
  }

  connect() {
  }
}
