import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

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

  resetWizard() {
    this.element.querySelector("#team-form").reset()
    this.element.querySelector("team-form-group").classList.remove("hidden");

    let select = this.element.querySelector("select[name='parent_key']")
    for(let i = 2; i < select.options.length;) {
      select.remove(i)
    }

    this.sectionOneTarget.classList.remove("hidden")
    this.sectionTwoTarget.classList.add("hidden")
    this.team = null;
    this.callback = () => {}
  }

  handleTeamEdit(event) {
    this.resetWizard();

    this.team = event.detail.team
    const form = this.element.querySelector("#team-form")
    form.name.value = this.team.name
    this.element.querySelector("team-form-group").classList.add("hidden");

    this.callback = event.detail.callback
  }

  handleNewTeam(event) {
    this.resetWizard();
    this.callback = event.detail.callback
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target
    let newTeamAttributes = {}

    newTeamAttributes.name = form.name.value
    newTeamAttributes.parent_key = form.parent_key.value

    const effectiveDate =  form.effective_at.value
    this.callback(effectiveDate, newTeamAttributes).then(() => {
      emitEvent("teamDone")
    })
  }

  connect() {
  }
}
