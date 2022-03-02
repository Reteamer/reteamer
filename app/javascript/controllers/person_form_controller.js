import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "dateSection", "employmentSection", "dataSection", "errorMessage", "form", "personType", "firstName" ]
  static values = {
    selectedDate: String
  }

  async handlePersonEdit(event) {
    this.resetWizard();

    this.person = event.detail.person
    const form = this.element.querySelector("#person-form")
    form.first_name.value = this.person.firstName
    form.last_name.value = this.person.lastName
    form.employee_id.value = this.person.employee_code
    form.title.value = this.person.title
    form.email.value = this.person.email || ""
    this.element.querySelector("supervisor-form-group").classList.add("hidden");
    this.element.querySelector("team-form-group").classList.add("hidden");

    this.callback = event.detail.callback
  }

  handleNewPerson(event) {
    this.resetWizard();
    this.callback = event.detail.callback
    this.dateSectionTarget.classList.add("hidden")
    this.employmentSectionTarget.classList.remove("hidden")
    this.personTypeTarget.focus()
  }

  resetWizard() {
    this.element.querySelector("#person-form").reset()
    this.element.querySelector("supervisor-form-group").classList.remove("hidden");
    this.element.querySelector("team-form-group").classList.remove("hidden");

    this.errorMessageTarget.innerHTML = null
    this.errorMessageTarget.classList.add("hidden")

    this.dateSectionTarget.classList.remove("hidden")
    this.employmentSectionTarget.classList.add("hidden")
    this.dataSectionTarget.classList.add("hidden")
    this.person = null;
    this.callback = () => {}

    this.populateDropdowns()
  }

  handleDatePicked(event) {
    event.preventDefault();
    this.dateSectionTarget.classList.add("hidden")
    this.dataSectionTarget.classList.remove("hidden")
    this.firstNameTarget.focus()
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

          if(this.person) {
            const form = this.element.querySelector("#person-form")
            form.job_family_id.value = this.person.job_family_id
          }
        })
      })
    })
  }

  handlePersonTypePicked(event) {
    this.employmentSectionTarget.classList.add("hidden")
    this.dataSectionTarget.classList.remove("hidden")
    this.firstNameTarget.focus()
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = this.formTarget
    let newPersonAttributes = {}
    newPersonAttributes.type = form.type.value
    newPersonAttributes.first_name = form.first_name.value
    newPersonAttributes.last_name = form.last_name.value
    newPersonAttributes.email = form.email.value
    newPersonAttributes.title = form.title.value
    newPersonAttributes.job_family_id = form.job_family_id.value
    newPersonAttributes.employee_id = form.employee_id.value
    newPersonAttributes.supervisor_key = form.supervisor_key.value
    newPersonAttributes.team_key = form.team_key.value

    const effectiveDate =  form.effective_at.value
    this.callback(effectiveDate, newPersonAttributes).then(() => {
      emitEvent("personDone")
    }).catch((json) => {
      this.errorMessageTarget.innerHTML = json.error.message;
      this.errorMessageTarget.classList.remove("hidden")
    })
  }

  connect() {
    this.element.innerHTML = `
    <div data-modal-target="container" data-action="click->modal#closeBackground" class="hidden animated fadeIn fixed inset-0 overflow-y-auto flex items-center justify-center" style="z-index: 9999;">
      <!-- Modal Inner Container -->
      <div class="max-w-lg max-h-screen w-full relative">
        <!-- Modal Card -->
        <div class="m-1 bg-white rounded shadow">
          <div class="p-8">
            <form 
              data-person-form-target="form"
              data-action="submit->person-form#handleSubmit" 
              id="person-form"
            >
              <date-section data-person-form-target="dateSection">
                <h2 class="text-xl mb-4">Pick a date for the changes to take effect</h2>
                
                <effective-date-fields
                  id="person-form-controller-fields"
                  data-controller="effective-date-fields"
                  data-action="datePicked@window->effective-date-fields#handleDatePicked"
                  data-effective-date-fields-selected-date-value="${this.selectedDateValue}"
                ></effective-date-fields>
  
                <div class="flex justify-end items-center flex-wrap mt-6">
                  <button type="button" class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                  <button type="button" class="btn btn-primary" data-action="click->person-form#handleDatePicked">Next</button>
                </div>
              </date-section>
              <employment-section data-person-form-target="employmentSection" class="hidden">
                <h2 class="text-xl mb-4">Select the type of position for this person</h2>
                <label>This is
                  <select 
                    name="type" 
                    class="select" 
                    name="type" 
                    data-action="change->person-form#handlePersonTypePicked"
                    data-person-form-target="personType"
                  >
                    <option disabled selected="true" value="">Pick one...</option>
                    <option value="Employee">an Employee</option>
                    <option value="Contractor">a Contractor</option>
                  </select>
                </label>
                <ul>
                  <li>An <em>employee</em> is expected to have a supervisor and an Employee ID from your HR system</li>
                  <li>
                    A <em>contractor</em> optionally has a supervisor and Employee ID from your HR system. Contractors
                    are highlightable in the charts.
                  </li>
                </ul>
              </employment-section>
              <data-section data-person-form-target="dataSection" class="hidden">
                <h2 class="text-xl mb-4">Fill in the details</h2>
                <div>
                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" name="first_name" data-person-form-target="firstName" />
                  </div>
                  <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" name="last_name" />
                  </div>
                  <supervisor-form-group class="form-group">
                    <label for="supervisor_key">Supervisor</label>
                    <select name="supervisor_key" class="select">
                      <option disabled value="">Pick one...</option>
                      <option value="">[No Supervisor]</option>
                    </select>
                  </supervisor-form-group>
                  <team-form-group class="form-group">
                    <label for="team_key">Initial Team</label>
                    <select name="team_key" class="select">
                      <option disabled value="">Pick one...</option>
                      <option value="">[Unassigned]</option>
                    </select>
                  </team-form-group>
                  <div class="form-group">
                    <label>Employee ID (used for matching to HR system when importing)</label>
                    <input type="text" class="form-control" name="employee_id" />
                  </div>
                  <div class="form-group">
                    <label>Job Title</label>
                    <input type="text" class="form-control" name="title" />
                  </div>
                  <div class="form-group">
                    <label title="Used to filter and group people and job openings">Job Family</label>
                    <select name="job_family_id" class="select">
                      <option disabled selected value="">Pick one...</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label title="Used for notifying employee as well as Gravatar for avatar">Email</label>
                    <input type="email" class="form-control" name="email" />
                  </div>
  
                  <error-message data-person-form-target="errorMessage" class="form-group bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"></error-message>
                  <div class="flex justify-end items-center flex-wrap mt-6">
                    <button type="button" class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </data-section>
            </form>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
