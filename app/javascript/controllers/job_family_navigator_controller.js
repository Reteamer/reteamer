import {Controller} from "@hotwired/stimulus";
import {emitEvent} from "../event_emitter";

export default class JobFamilyNavigatorController extends Controller {
  emitNewJobFamily(e) {
    emitEvent("jobFamilyPicked", { jobFamilyId: e.target.value })
  }

  connect() {
    fetch(`/reteamer_api/job_families.json`).then((response) => {
      response.json().then((jobFamilies) => {
        jobFamilies = jobFamilies.sort((item, other) => item.name.localeCompare(other.name))

        const select = this.element.querySelector(`select[name="job_family_id"]`)
        jobFamilies.forEach((jobFamily) => {
          let option = document.createElement('option')
          option.value = jobFamily.id
          option.text = jobFamily.name
          select.appendChild(option)
        })
      })
    })
  }
}
