import { Controller } from "@hotwired/stimulus"
import dayjs from "dayjs";

export default class extends Controller {
  static targets = [ "hiddenInput", "selectedDate", "selectedDateInput", "otherDateInput" ]

  handleDatePicked(event) {
    console.error("=============>", "handling");
    this.selectedDate = event.detail.newDate;
    this.selectedDateTarget.innerHTML = dayjs(this.selectedDate).format("ddd, MMM D, YYYY");
    this.selectedDateInputTarget.value = this.selectedDate;
    this.otherDateInputTarget._flatpickr.setDate(this.selectedDate);
  }

  handleRadioChange(event) {
    this.hiddenInputTarget.value = event.target.value
  }

  connect() {
    this.selectedDate = null;
  }
}
