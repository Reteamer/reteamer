import { Controller } from "@hotwired/stimulus"
import {getNextMonday, isoDate, getPreviousMonday} from "../date_helpers"
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear"
import flatpickr from "flatpickr";
dayjs.extend(weekOfYear)

export default class extends Controller {
  static targets = [ "dateInput" ]
  static values = { selectedDate: String }

  handleInputChange(event) {
    this.selectedDateValue = event.target.value
  }

  advanceToPreviousWeek() {
    this.selectedDateValue = getPreviousMonday(dayjs(this.selectedDateValue)).format(isoDate)
    flatpickr(this.dateInputTarget, {}).setDate(this.selectedDateValue)
  }

  advanceToNextWeek() {
    this.selectedDateValue = getNextMonday(dayjs(this.selectedDateValue)).format(isoDate)
    flatpickr(this.dateInputTarget, {}).setDate(this.selectedDateValue)
  }

  advanceToPreviousDay() {
    this.selectedDateValue = dayjs(this.selectedDateValue).subtract(1, "day").format(isoDate)
    flatpickr(this.dateInputTarget, {}).setDate(this.selectedDateValue)
  }

  advanceToNextDay() {
    this.selectedDateValue = dayjs(this.selectedDateValue).add(1, "day").format(isoDate)
    flatpickr(this.dateInputTarget, {}).setDate(this.selectedDateValue)
  }

  connect() {
    this.element.innerHTML = `
        <i class="fas fa-angle-double-left" data-action="click->simple-date-navigator#advanceToPreviousWeek"></i>
        <i class="fas fa-angle-left" data-action="click->simple-date-navigator#advanceToPreviousDay"></i>
        <input type="text"
         name="effective_date"
         id="effective_date"
         class="form-control-inline flatpickr-input active"
         data-simple-date-navigator-target="dateInput"
         data-action="datePicked@window->date-navigator#handleDateChange change->simple-date-navigator#handleInputChange"
         data-controller="flatpickr"
         readonly="readonly"
         value="${this.selectedDateValue}"
        />
        <i class="fas fa-angle-right" data-action="click->simple-date-navigator#advanceToNextDay"></i>
        <i class="fas fa-angle-double-right" data-action="click->simple-date-navigator#advanceToNextWeek"></i>
    `
  }
}
