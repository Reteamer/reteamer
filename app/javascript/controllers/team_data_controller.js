import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static values = { startingDate: String }

  handleDatePicked(event) {
    this.getTeamData(event.detail.newDate);
  }

  handleProposalPicked(event) {
    const selectedDate = document.querySelector("date-navigator input").value
    this.getTeamData(selectedDate);
  }

  connect() {
    this.getTeamData(this.startingDateValue)
  }

  getTeamData(newDate) {
    fetch(`/reteamer_api/team_chart.json?effective_date=${newDate}`).then(response => {
      response.json().then(teamData => {
        emitEvent("newData", {
          teamData: teamData,
          histogram: teamData.histogram
        })
      })
    })
  }
}
