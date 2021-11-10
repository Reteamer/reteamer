import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { startingDate: String }

  handleDatePicked(event) {
    this.getOrgData(event.detail.newDate);
  }

  connect() {
    this.getOrgData(this.startingDateValue)
  }

  async getOrgData(newDate) {
    const response = await fetch(`/reteamer_api/org_chart.json?effective_date=${newDate}`)
    const orgData = await response.json()

    const event = new CustomEvent("newData",
      {
        detail: {
          orgData: orgData,
          histogram: orgData.histogram
        }
      }
    )
    window.dispatchEvent(event)
  }
}
