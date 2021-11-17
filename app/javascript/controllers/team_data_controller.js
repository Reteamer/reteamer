import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static values = { startingDate: String }

  handleDatePicked(event) {
    this.getTeamData(event.detail.newDate);
  }

  async connect() {
    this.getTeamData(this.startingDateValue)
  }

  async getTeamData(newDate) {
    const response = await fetch(`/reteamer_api/team_chart.json?effective_date=${newDate}`)
    const teamData = await response.json()
    emitEvent("newData", {
      teamData: teamData,
      histogram: teamData.histogram
    })
  }
}
