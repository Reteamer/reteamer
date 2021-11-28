import { Controller } from "@hotwired/stimulus"
import {emitEvent} from "../event_emitter";

export default class extends Controller {
  static targets = [ "select" ]

  async handleProposalChanged(event) {
    const proposalName = event.target.value;
    await fetch(`/reteamer_api/proposals/switch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(
        {
          "proposal_name": proposalName,
        }
      )
    })
    emitEvent("proposalPicked", { proposalName: proposalName})
  }

  handleNewProposal(event) {
    const proposalName = event.detail.proposalName;

    if(!this.selectTarget.querySelector(`option[value='${proposalName}']`)) {
      const opt = document.createElement('option');
      opt.value = proposalName;
      opt.innerHTML = proposalName;
      this.selectTarget.appendChild(opt);
    }

    this.selectTarget.querySelector(`option[value='${proposalName}']`).selected = "selected";
  }

  connect() {
  }
}
