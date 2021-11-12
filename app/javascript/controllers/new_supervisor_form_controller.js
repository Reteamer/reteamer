import { Controller } from "@hotwired/stimulus"
import { emitCompleteChangeEvent } from "../event_emitter";

export default class extends Controller {
  static targets = [ "selectedDate", "selectedDateInput", "otherDateInput" ]

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

  }
}
