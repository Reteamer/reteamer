import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "sectionOne", "sectionThree", "errorMessage", "submitButton" ]
  static values = {
    selectedDate: String
  }

  handleOpenReqEdit(event) {
    this.resetWizard();

    this.openReq = event.detail.openReq
    this.element.querySelector("supervisor-form-group").classList.add("hidden");
    this.element.querySelector("team-form-group").classList.add("hidden");

    this.callback = event.detail.callback
  }

  handleNewOpenReq(event) {
    this.resetWizard();
    this.sectionOneTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
    this.callback = event.detail.callback
  }

  resetWizard() {
    this.element.querySelector("#open-req-form").reset()
    this.element.querySelector("supervisor-form-group").classList.remove("hidden");
    this.element.querySelector("team-form-group").classList.remove("hidden");

    this.errorMessageTarget.innerHTML = null
    this.errorMessageTarget.classList.add("hidden")
    this.submitButtonTarget.disabled = false

    this.sectionOneTarget.classList.remove("hidden")
    this.sectionThreeTarget.classList.add("hidden")
    this.openReq = null;
    this.callback = () => {}

    this.populateDropdowns()
  }

  handleDatePicked(event) {
    event.preventDefault();
    // this.populateDropdowns()
    this.sectionOneTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
  }

  populateDropdowns() {
    const dropDowns = [
      {formKey: "supervisor_key", dataKey: "supervisors", resetIndex: 2},
      {formKey: "team_key", dataKey: "teams", resetIndex: 2},
      {formKey: "job_family_id", dataKey: "job_families", resetIndex: 1},
    ]

    dropDowns.forEach((dropDown) => {
      let select = this.element.querySelector(`select[name="${dropDown.formKey}"]`)
      for(let i = dropDown.resetIndex; i < select.options.length;) {
        select.remove(i)
      }
    })

    const selected_date = this.element.querySelector("input[name='effective_at']").value

    fetch(`/reteamer_api/person_form_drop_downs.json?effective_date=${selected_date}`).then((response) => {
      response.json().then((data) => {

        dropDowns.forEach((dropDown) => {
          const select = this.element.querySelector(`select[name="${dropDown.formKey}"]`)
          const sortedItems = data[dropDown.dataKey].sort((item, other) => item.name.localeCompare(other.name))
          sortedItems.forEach((item) => {
            let option = document.createElement('option')
            option.value = item.key
            option.text = item.name
            select.appendChild(option)
          })

          if(this.openReq) {
            const form = this.element.querySelector("#open-req-form")
            form.job_family_id.value = this.openReq.job_family_id
          }
        })
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target
    let newOpenReqAttributes = {}
    newOpenReqAttributes.supervisor_key = form.supervisor_key.value
    newOpenReqAttributes.team_key = form.team_key.value
    newOpenReqAttributes.job_family_id = form.job_family_id.value

    const effectiveDate =  form.effective_at.value
    this.callback(effectiveDate, newOpenReqAttributes).then(() => {
      emitEvent("openReqDone")
    }).catch((json) => {
      this.errorMessageTarget.innerHTML = json.error.message;
      this.errorMessageTarget.classList.remove("hidden")
    })
  }

  connect() {
    this.element.innerHTML = `
    <div data-modal-target="container" data-action="click->modal#closeBackground keyup@window->modal#closeWithKeyboard" class="hidden animated fadeIn fixed inset-0 overflow-y-auto flex items-center justify-center" style="z-index: 9999;">
      <!-- Modal Inner Container -->
      <div class="max-w-lg max-h-screen w-full relative">
        <!-- Modal Card -->
        <div class="m-1 bg-white rounded shadow">
          <div class="p-8">
            <form data-action="submit->open-req-form#handleSubmit" id="open-req-form">
              <section-one data-open-req-form-target="sectionOne">
                <h2 class="text-xl mb-4">Pick a date for the changes to take effect</h2>
                <p>
                  <em>Open Reqs</em>, or open requisitions, indicate where a hire needs to be made. These do
                  not need a name, employee ID, or avatar. Open Reqs are also highlightable in the charts
                </p>              
                <effective-date-fields
                id="open-req-form-controller-fields"
                  data-controller="effective-date-fields"
                  data-action="datePicked@window->effective-date-fields#handleDatePicked"
                  data-effective-date-fields-selected-date-value="${this.selectedDateValue}"
                ></effective-date-fields>
  
                <div class="flex justify-end items-center flex-wrap mt-6">
                  <button class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                  <button class="btn btn-primary" data-action="click->open-req-form#handleDatePicked">Next</button>
                </div>
              </section-one>
              <section-three data-open-req-form-target="sectionThree" class="hidden">
                <h2 class="text-xl mb-4">Fill in the details</h2>
                <div>
                  <supervisor-form-group class="form-group">
                    <label for="supervisor_key">Supervisor</label>
                    <select name="supervisor_key" class="select">
                      <option disabled selected value="">Pick one...</option>
                      <option value="">&lt;No Supervisor&gt;</option>
                    </select>
                  </supervisor-form-group>
                  <team-form-group class="form-group">
                    <label for="team_key">Initial Team</label>
                    <select name="team_key" class="select">
                      <option disabled selected value="">Pick one...</option>
                      <option value="">&lt;Unassigned&gt;</option>
                    </select>
                  </team-form-group>
                  <div class="form-group">
                    <label title="Used to filter and group people and job openings">Job Family</label>
                    <select name="job_family_id" class="select">
                      <option disabled selected value="">Pick one...</option>
                    </select>
                  </div>
                 <error-message data-open-req-form-target="errorMessage" class="form-group bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"></error-message>
                 <div class="flex justify-end items-center flex-wrap mt-6">
                    <button class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                    <button data-open-req-form-target="submitButton" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </section-three>
            </form>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
