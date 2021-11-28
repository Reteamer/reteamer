import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static values = { startingDate: String }

  handleDatePicked(event) {
    this.getOrgData(event.detail.newDate);
  }

  handleProposalPicked(event) {
    const selectedDate = document.querySelector("date-navigator input").value
    this.getOrgData(selectedDate);
  }

  connect() {
    this.getOrgData(this.startingDateValue)
  }

  getOrgData(newDate) {
    fetch(`/reteamer_api/org_chart.json?effective_date=${newDate}`).then(response => {
      response.json().then(orgData => {
        emitEvent("newData", {
          orgData: orgData,
          histogram: orgData.histogram
        })
      })
    })
  }
}
