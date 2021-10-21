import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "selectedDate" ]

  handleDatePicked(event) {
    this.selectedDate = event.detail.newDate;
    this.selectedDateTarget.innerHTML = this.selectedDate;
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
    const event = new CustomEvent("completeChange",
      {
        detail: {
          selectedDate: newDate
        }
      }
    )
    window.dispatchEvent(event)
  }

  connect() {
    this.selectedDate = null;
  }
}
