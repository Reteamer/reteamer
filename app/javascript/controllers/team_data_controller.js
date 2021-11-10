import { Controller } from "@hotwired/stimulus"

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

    const event = new CustomEvent("newData",
      {
        detail: {
          teamData: teamData,
          histogram: teamData.histogram
        }
      }
    )
    window.dispatchEvent(event)
  }
}
