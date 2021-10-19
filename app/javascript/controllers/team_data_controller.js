import { Controller } from "stimulus"
import { newISODate } from "../date_helpers"

export default class extends Controller {
  async handleDatePicked(event) {
    this.getTeamData(event.detail.newDate);
  }

  async connect() {
    const newDate = newISODate()
    this.getTeamData(newDate)
  }

  async getTeamData(newDate) {
    const response = await fetch(`/reteamer_api/team_chart.json?effective_date=${newDate}`)
    const teamData = await response.json()

    const event = new CustomEvent("newTeamData",
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
