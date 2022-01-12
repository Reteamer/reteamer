import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "sectionOne", "sectionTwo", "sectionThree" ]
  static values = {
    selectedDate: String
  }

  handlePersonEdit(event) {
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
  }

  resetWizard() {
    this.element.querySelector("#person-form").reset()
    this.element.querySelector("supervisor-form-group").classList.remove("hidden");

    let select = this.element.querySelector("select[name='supervisor_key']")
    for(let i = 2; i < select.options.length;) {
      select.remove(i)
    }

    select = this.element.querySelector("select[name='team_key']")
    for(let i = 2; i < select.options.length;) {
      select.remove(i)
    }

    this.element.querySelector("team-form-group").classList.remove("hidden");
    this.sectionOneTarget.classList.remove("hidden")
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.add("hidden")
    this.person = null;
    this.callback = () => {}
  }

  isNewRecord() {
    return !this.person;
  }

  handleDatePicked(event) {
    event.preventDefault();
    if(this.isNewRecord()) {
      const selected_date = document.querySelector("#person-form input[name='effective_at']").value
      fetch(`/reteamer_api/supervisors.json?effective_date=${selected_date}`).then((response) => {
        response.json().then((data) => {
          const select = document.querySelector("#person-form select[name='supervisor_key']")
          const sortedSupervisors = data.supervisors.sort((supervisor, other) => supervisor.name.localeCompare(other.name))
          sortedSupervisors.forEach((supervisor) => {
            let option = document.createElement('option')
            option.value = supervisor.id
            option.text = supervisor.name
            select.appendChild(option)
          })
        })
      })

      fetch(`/reteamer_api/teams.json?effective_date=${selected_date}`).then((response) => {
        response.json().then((data) => {
          const select = document.querySelector("#person-form select[name='team_key']")
          const sortedTeams = data.teams.sort((team, other) => team.name.localeCompare(other.name))
          sortedTeams.forEach((team) => {
            let option = document.createElement('option')
            option.value = team.id
            option.text = team.name
            select.appendChild(option)
          })
        })
      })
    }

    this.sectionOneTarget.classList.add("hidden")
    if(this.isNewRecord()) {
      this.sectionTwoTarget.classList.remove("hidden")
    } else {
      this.sectionThreeTarget.classList.remove("hidden")
    }
  }

  handlePersonTypePicked(event) {
    this.sectionTwoTarget.classList.add("hidden")
    this.sectionThreeTarget.classList.remove("hidden")
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target
    let newPersonAttributes = {}
    newPersonAttributes.type = form.type.value
    newPersonAttributes.first_name = form.first_name.value
    newPersonAttributes.last_name = form.last_name.value
    newPersonAttributes.email = form.email.value
    newPersonAttributes.title = form.title.value
    newPersonAttributes.employee_id = form.employee_id.value
    newPersonAttributes.supervisor_key = form.supervisor_key.value
    newPersonAttributes.team_key = form.team_key.value

    const effectiveDate =  form.effective_at.value
    this.callback(effectiveDate, newPersonAttributes).then(() => {
      emitEvent("personDone")
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
            <form data-action="submit->person-form#handleSubmit" id="person-form">
              <section-one data-person-form-target="sectionOne">
                <h2 class="text-xl mb-4">Pick a date for the changes to take effect</h2>
                
                <effective-date-fields
                id="person-form-controller-fields"
                  data-controller="effective-date-fields"
                  data-action="datePicked@window->effective-date-fields#handleDatePicked"
                  data-effective-date-fields-selected-date-value="${this.selectedDateValue}"
                ></effective-date-fields>
  
                <div class="flex justify-end items-center flex-wrap mt-6">
                  <button class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                  <button class="btn btn-primary" data-action="click->person-form#handleDatePicked">Next</button>
                </div>
              </section-one>
              <section-two data-person-form-target="sectionTwo" class="hidden">
                <h2 class="text-xl mb-4">Select the type of position for this person</h2>
                <label>This is
                  <select name="type" class="select" name="type" data-action="change->person-form#handlePersonTypePicked">
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
              </section-two>
              <section-three data-person-form-target="sectionThree" class="hidden">
                <h2 class="text-xl mb-4">Fill in the details</h2>
                <div>
                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" name="first_name" />
                  </div>
                  <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" name="last_name" />
                  </div>
                  <supervisor-form-group class="form-group">
                    <label for="supervisor_key">Supervisor</label>
                    <select name="supervisor_key" class="select">
                      <option disabled selected>Pick one...</option>
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
                    <label>Employee ID (used for matching to HR system when importing)</label>
                    <input type="text" class="form-control" name="employee_id" />
                  </div>
                  <div class="form-group">
                    <label>Job Title</label>
                    <input type="text" class="form-control" name="title" />
                  </div>
                  <div class="form-group">
                    <label>Email (used for notifying employee as well as Gravatar for avatar)</label>
                    <input type="email" class="form-control" name="email" />
                  </div>
  
                  <div class="flex justify-end items-center flex-wrap mt-6">
                    <button class="btn btn-cancel" data-action="click->modal#close">Cancel</button>
                    <button class="btn btn-primary">Submit</button>
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
