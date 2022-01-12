import { Controller } from "@hotwired/stimulus"
import {getNextMonday, getPreviousMonday, isoDate} from "../date_helpers"
import dayjs from "dayjs";
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "dateInput" ]
  static values = { selectedDate: String }

  handleInputChange(event) {
    this.setInputValue(event.target.value)
  }

  handleExternalDateChange(event) {
    if(event.detail && event.detail.source != "simple-date-navigator") {
      this.selectedDateValue = event.detail.newDate
      let fp = this.dateInputTarget._flatpickr
      fp.setDate(this.selectedDateValue)
    }
  }

  setInputValue(newValue) {
    this.selectedDateValue = newValue
    let fp = this.dateInputTarget._flatpickr
    fp.setDate(this.selectedDateValue)
    emitEvent("datePicked", {newDate: this.selectedDateValue, source: "simple-date-navigator"})
  }

  advanceToPreviousWeek() {
    this.setInputValue(getPreviousMonday(dayjs(this.selectedDateValue)).format(isoDate))
  }

  advanceToNextWeek() {
    this.setInputValue(getNextMonday(dayjs(this.selectedDateValue)).format(isoDate))
  }

  advanceToPreviousDay() {
    this.setInputValue(dayjs(this.selectedDateValue).subtract(1, "day").format(isoDate))
  }

  advanceToNextDay() {
    this.setInputValue(dayjs(this.selectedDateValue).add(1, "day").format(isoDate))
  }

  connect() {
  }
}
