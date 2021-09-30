import { Controller } from "stimulus"

export default class extends Controller {
  async handleDatePicked(event) {
    this.getOrgData(event.detail.newDate);
  }

  async connect() {
    const newDate = new Date().toISOString().split('T')[0]
    this.getOrgData(newDate)
  }

  async getOrgData(newDate) {
    const response = await fetch(`/reteamer_api/org_chart.json?effective_date=${newDate}`)
    const orgData = await response.json()

    const event = new CustomEvent("newOrgData",
      {
        detail: {
          orgData: orgData
        }
      }
    )
    window.dispatchEvent(event)
  }
}
