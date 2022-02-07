import { Controller } from "@hotwired/stimulus"
import dayjs from "dayjs";
import {getNextMonday, peopleDate, isoDate} from "../date_helpers";
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static values = {
    selectedDate: String
  }

  handleDatePicked(event) {
    const newDate = event.detail.newDate;
    this.selectedDate.innerHTML = dayjs(newDate).format(peopleDate);
    this.selectedDateInput.value = newDate;
    this.otherDateInput._flatpickr.setDate(newDate);
    this.setHiddenInputValue(newDate);
  }

  setHiddenInputValue(value) {
    this.hiddenInput.value = value
    this.hiddenInput.dispatchEvent(new Event('change'));
    emitEvent('effective-date-picker-value-changed', { value });
  }

  handleRadioChange(event) {
    if(event.target.value === "other") {
      this.setHiddenInputValue(this.otherDateInput.value);
    } else {
      this.setHiddenInputValue(event.target.value);
    }
  }

  handleOtherChange(event) {
    if(this.otherDateRadio.checked) {
      this.setHiddenInputValue(this.otherDateInput.value);
    }
  }

  connect() {
    this.element.innerHTML = `
    <label>
      <input type="radio"
             name="effective_date_radio"
             value="${this.selectedDateValue}"
             data-action="change->effective-date-fields#handleRadioChange"
             class="selectedDateInput"
             checked
      />
      The selected date:
      <span class="selectedDateSpan">${dayjs(this.selectedDateValue).format(peopleDate)}</span>
    </label>
    <label>
      <input type="radio"
             name="effective_date_radio"
             value="${dayjs().format(isoDate)}"
             data-action="change->effective-date-fields#handleRadioChange"
      />
      Today: ${dayjs().format(peopleDate)}
    </label>
    <label>
      <input type="radio"
             name="effective_date_radio"
             value="${getNextMonday().format(isoDate)}"
             data-action="change->effective-date-fields#handleRadioChange"
      />
      Beginning of next week: ${getNextMonday().format(peopleDate)}
    </label>
    <label>
      <input type="radio"
             name="effective_date_radio"
             value="other"
             class="otherDateRadio"
             data-action="change->effective-date-fields#handleRadioChange"
      />
      A different date:
      <input type="text"
             name="other_effective_date"
             id="other_effective_date"
             class="form-control-inline flatpickr-input active otherDateInput w-32"
             data-controller="flatpickr"
             readonly="readonly"
             value="${this.selectedDateValue}"
             data-action="change->effective-date-fields#handleOtherChange"
        />
    </label>
    <input type="hidden"
           name="effective_at"
           class="hiddenInput"
    />
    `

    this.hiddenInput = this.element.querySelector("input.hiddenInput")
    this.selectedDate = this.element.querySelector("span.selectedDateSpan")
    this.selectedDateInput = this.element.querySelector("input.selectedDateInput")
    this.otherDateRadio = this.element.querySelector("input.otherDateRadio")
    this.otherDateInput = this.element.querySelector("input.otherDateInput")

    this.setHiddenInputValue(this.selectedDateValue);
  }
}
