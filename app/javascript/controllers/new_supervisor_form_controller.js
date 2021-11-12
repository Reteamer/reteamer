import { Controller } from "@hotwired/stimulus"
import { emitCompleteChangeEvent } from "../event_emitter";

export default class extends Controller {
  static targets = [ "selectedDate", "selectedDateInput", "otherDateInput" ]

  cancelChange() {
    const event = new CustomEvent("cancelChange", {})
    window.dispatchEvent(event)
  }

  completeChange() {
    const newDate = document.querySelector('#new-supervisor-form input[name="effective_at"]').value
    emitCompleteChangeEvent(newDate)
  }

  connect() {

  }
}
