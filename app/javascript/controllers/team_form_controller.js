import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "dateSection", "dataSection" ]

  handleDatePicked(event) {
    event.preventDefault();
    this.populateDropdown();
    this.dateSectionTarget.classList.add("hidden")
    this.dataSectionTarget.classList.remove("hidden")
  }

  populateDropdown() {
    let select = this.element.querySelector("select[name='parent_key']")
    for(let i = 2; i < select.options.length;) {
      select.remove(i)
    }

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
  }

  resetWizard() {
    this.element.querySelector("#team-form").reset()
    this.element.querySelector("team-form-group").classList.remove("hidden");

    this.dateSectionTarget.classList.remove("hidden")
    this.dataSectionTarget.classList.add("hidden")
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
    this.populateDropdown();
    this.callback = event.detail.callback
    this.dateSectionTarget.classList.add("hidden")
    this.dataSectionTarget.classList.remove("hidden")
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
