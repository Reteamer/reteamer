import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { startingDate: String }

  handleDatePicked(event) {
    this.getOrgData(event.detail.newDate);
  }

  handlePlanPicked(event) {
    const selectedDate = document.querySelector("date-navigator input").value
    this.getOrgData(selectedDate);
  }

  connect() {
    this.getOrgData(this.startingDateValue)
  }

  async getOrgData(newDate) {
    const planSelect = document.querySelector("plan-navigator select");
    const planName = planSelect.options[planSelect.selectedIndex].value;

    const response = await fetch(`/reteamer_api/org_chart.json?effective_date=${newDate}&plan_name=${planName}`)
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
