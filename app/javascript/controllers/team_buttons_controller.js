import { Controller } from "@hotwired/stimulus"
import {emitDatePickedEvent} from "../event_emitter";

export default class extends Controller {
  deleteTeam({ params: {teamKey} = "" }) {
    const event = new CustomEvent("teamDeactivated",
      {
        detail: {
          callback: function(effectiveDate) {
            fetch(`/reteamer_api/teams/${teamKey}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              body: JSON.stringify(
                {
                  "effective_at": effectiveDate,
                  "key": teamKey
                }
              )
            }).then(() => {
              emitDatePickedEvent(effectiveDate)
            });
          }
        }
      }
    )
    window.dispatchEvent(event)
  }

  connect() {
    this.element.setAttribute("cursor", "pointer")
  }

}
