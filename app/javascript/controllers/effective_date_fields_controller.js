import { Controller } from "@hotwired/stimulus"
import dayjs from "dayjs";

export default class extends Controller {
  static targets = [
    "hiddenInput",
    "selectedDate",
    "selectedDateInput",
    "otherDateRadio",
    "otherDateInput"
  ]

  static values = {
    selectedDate: String
  }

  handleDatePicked(event) {
    const newDate = event.detail.newDate;
    this.selectedDateTarget.innerHTML = dayjs(newDate).format("ddd, MMM D, YYYY");
    this.selectedDateInputTarget.value = newDate;
    this.otherDateInputTarget._flatpickr.setDate(newDate);
    this.setHiddenInputValue(newDate);
  }

  setHiddenInputValue(value) {
    this.hiddenInputTarget.value = value
    this.hiddenInputTarget.dispatchEvent(new Event('change'));
  }

  handleRadioChange(event) {
    if(event.target.value === "other") {
      this.setHiddenInputValue(this.otherDateInputTarget.value);
    } else {
      this.setHiddenInputValue(event.target.value);
    }
  }

  handleOtherChange(event) {
    if(this.otherDateRadioTarget.checked) {
      this.setHiddenInputValue(this.otherDateInputTarget.value);
    }
  }

  connect() {
    this.setHiddenInputValue(this.selectedDateValue);
  }
}
