import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "sectionOne", "sectionThree" ]
  static values = {
    selectedDate: String
  }

  handleOpenReqEdit(event) {
    this.resetWizard();

    this.openReq = event.detail.openReq
    const form = this.element.querySelector("#open-req-form")
    form.title.value = this.openReq.title
    this.element.querySelector("supervisor-form-group").classList.add("hidden");
    this.element.querySelector("team-form-group").classList.add("hidden");

    this.callback = event.detail.callback
  }

  handleNewOpenReq(event) {
    this.resetWizard();
    this.callback = event.detail.callback
  }

  resetWizard() {
    this.element.querySelector("#open-req-form").reset()
    this.element.querySelector("supervisor-form-group").classList.remove("hidden");
    this.element.querySelector("team-form-group").classList.remove("hidden");
    this.sectionOneTarget.classList.remove("hidden")
    this.sectionThreeTarget.classList.add("hidden")
    this.openReq = null;
    this.callback = () => {}
  }

  isNewRecord() {
    return !this.openReq;
  }

  handleDatePicked(event) {
    event.preventDefault();
    if(this.isNewRecord()) {
      const selected_date = document.querySelector("#open-req-form input[name='effective_at']").value
      fetch(`/reteamer_api/supervisors.json?effective_date=${selected_date}`).then((response) => {
        response.json().then((data) => {
          const select = document.querySelector("#open-req-form select[name='supervisor_key']")
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
          const select = document.querySelector("#open-req-form select[name='team_key']")
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
    this.sectionThreeTarget.classList.remove("hidden")
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target
    let newOpenReqAttributes = {}
    newOpenReqAttributes.title = form.title.value
    newOpenReqAttributes.supervisor_key = form.supervisor_key.value
    newOpenReqAttributes.team_key = form.team_key.value

    const effectiveDate =  form.effective_at.value
    this.callback(effectiveDate, newOpenReqAttributes).then(() => {
      emitEvent("openReqDone")
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
                      <option disabled selected>Pick one...</option>
                      <option>&lt;No Supervisor&gt;</option>
                    </select>
                  </supervisor-form-group>
                  <team-form-group class="form-group">
                    <label for="team_key">Initial Team</label>
                    <select name="team_key" class="select">
                      <option disabled selected>Pick one...</option>
                      <option>&lt;Unassigned&gt;</option>
                    </select>
                  </team-form-group>
                  <div class="form-group">
                    <label>Job Title</label>
                    <input type="text" class="form-control" name="title" />
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
