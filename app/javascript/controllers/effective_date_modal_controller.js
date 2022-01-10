import { Controller } from "@hotwired/stimulus"
import dayjs from "dayjs";
import {getNextMonday, peopleDate, isoDate} from "../date_helpers";
import {emitCompleteChangeEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [
    "effectiveDateForm"
  ]

  static values = {
    selectedDate: String,
    completedEvent: String,
    canceledEvent: String,
    openEvent: String,
    id: String
  }

  handleOpenEvent(e) {
    if(e.detail) {
      this.callback = e.detail.callback
    }
  }

  cancelChange() {
    const event = new CustomEvent(this.canceledEventValue, {})
    window.dispatchEvent(event)
  }

  completeChange() {
    const newDate = this.effectiveDateFormTarget.querySelector('input[name="effective_at"]').value
    emitCompleteChangeEvent(newDate, this.completedEventValue)
    if(this.callback) { this.callback(newDate) }
  }

  connect() {
    this.element.innerHTML = `
      <div data-controller="modal" data-action="${this.openEventValue}@window->modal#open ${this.openEventValue}@window->effective-date-modal#handleOpenEvent">
        <div data-modal-target="container" data-action="click->modal#closeBackground keyup@window->modal#closeWithKeyboard" class="hidden animated fadeIn fixed inset-0 overflow-y-auto flex items-center justify-center" style="z-index: 9999;">
          <!-- Modal Inner Container -->
          <div class="max-w-sm max-h-screen w-full relative">
            <!-- Modal Card -->
            <div class="m-1 bg-white rounded shadow">
              <div class="p-8">
                <h2 class="text-xl mb-4">Pick a date for the change to take effect</h2>
                <form data-effective-date-modal-target="effectiveDateForm">
                  <effective-date-fields
                    data-controller="effective-date-fields"
                    data-effective-date-fields-selected-date-value="${this.selectedDateValue}"
                  ></effective-date-fields>
                  <div class="flex justify-end items-center flex-wrap mt-6">
                    <button class="btn btn-cancel" data-action="click->modal#close click->effective-date-modal#cancelChange">Cancel</button>
                    <button class="btn btn-primary" data-action="click->modal#close click->effective-date-modal#completeChange">Commit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
