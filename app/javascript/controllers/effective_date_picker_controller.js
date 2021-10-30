import { Controller } from "stimulus"
import { emitCompleteChangeEvent } from "../event_emitter";

export default class extends Controller {
  static targets = [ "selectedDate", "selectedDateInput", "otherDateInput" ]

  handleDatePicked(event) {
    this.selectedDate = event.detail.newDate;
    this.selectedDateTarget.innerHTML = this.selectedDate;
    this.selectedDateInputTarget.value = this.selectedDate;
    this.otherDateInputTarget.value = this.selectedDate;
  }

  cancelChange() {
    const event = new CustomEvent("cancelChange", {})
    window.dispatchEvent(event)
  }

  completeChange() {
    let newDate = document.querySelector('input[name="effective_date"]:checked').value
    if (newDate == "other") {
      newDate = document.getElementById("other_effective_date").value
    }
    emitCompleteChangeEvent(newDate)
  }

  connect() {
    this.selectedDate = null;
  }
}
