import { Controller } from "@hotwired/stimulus"
import {getNextMonday, isoDate, getPreviousMonday, peopleDate} from "../date_helpers"
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear"
import flatpickr from "flatpickr";
import {emitEvent} from "../event_emitter";
dayjs.extend(weekOfYear)

export default class extends Controller {
  static targets = [ "dateInput" ]
  static values = { selectedDate: String }

  handleInputChange(event) {
    this.selectedDateValue = event.target.value
  }

  selectedDateValueChanged() {
    emitEvent("datePicked", {newDate: this.selectedDateValue})
  }

  setInputValue() {
    let fp = this.dateInputTarget._flatpickr
    fp.setDate(this.selectedDateValue)
  }

  advanceToPreviousWeek() {
    this.selectedDateValue = getPreviousMonday(dayjs(this.selectedDateValue)).format(isoDate)
    this.setInputValue()
  }

  advanceToNextWeek() {
    this.selectedDateValue = getNextMonday(dayjs(this.selectedDateValue)).format(isoDate)
    this.setInputValue()
  }

  advanceToPreviousDay() {
    this.selectedDateValue = dayjs(this.selectedDateValue).subtract(1, "day").format(isoDate)
    this.setInputValue()
  }

  advanceToNextDay() {
    this.selectedDateValue = dayjs(this.selectedDateValue).add(1, "day").format(isoDate)
    this.setInputValue()
  }

  connect() {
    this.element.innerHTML = `
        <i class="fas fa-angle-double-left cursor-pointer" style="text-shadow: 0 0 5px #bbb;" data-action="click->simple-date-navigator#advanceToPreviousWeek" title="beginning of week"></i>
        <i class="fas fa-angle-left cursor-pointer" style="text-shadow: 0 0 5px #bbb;" data-action="click->simple-date-navigator#advanceToPreviousDay" title="previous day"></i>
        <input type="text"
         name="effective_date"
         id="effective_date"
         class="form-control-inline flatpickr-input active w-[160px]"
         data-simple-date-navigator-target="dateInput"
         data-action="datePicked@window->date-navigator#handleDateChange change->simple-date-navigator#handleInputChange"
         data-controller="flatpickr"
         data-flatpickr-alt-format="D M j, Y"
         data-flatpickr-alt-input="true"
         data-flatpickr-alt-input-class="form-control-inline flatpickr-input active w-[160px]"
         readonly="readonly"
         value="${this.selectedDateValue}"
        />
        <i class="fas fa-angle-right cursor-pointer" style="text-shadow: 0 0 5px #bbb;"  data-action="click->simple-date-navigator#advanceToNextDay" title="next day"></i>
        <i class="fas fa-angle-double-right cursor-pointer" style="text-shadow: 0 0 5px #bbb;"  data-action="click->simple-date-navigator#advanceToNextWeek" title="beginnning of next week"></i>
    `
  }
}
