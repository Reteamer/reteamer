import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = ["input", "hint"]

  resetForm() {
    if(this.inputTarget.classList.contains("error")) {
      this.inputTarget.classList.remove("error");
      this.hintTarget.innerHTML = "&nbsp;"
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const selectedDate = document.querySelector("date-navigator input").value
    const proposalName = event.target[0].value;
    fetch("/reteamer_api/proposals.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(
        {
          "proposal_name": proposalName,
          "effective_date": selectedDate,
        }
      )
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject(response.json())
      }
    })
      .then(() => {
        this.resetForm()
        this.inputTarget.value = null;
        emitEvent("proposalCompleted")
        emitEvent("proposalPicked", {proposalName: proposalName})
      })
      .catch((jsonPromise) => {
        jsonPromise.then((json) => {
          event.target[0].classList.add("error");
          event.target.querySelector("p.form-hint").innerHTML = json.error
        })
      })
  }

  connect() {
  }
}
