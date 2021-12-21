import { Controller } from "@hotwired/stimulus"
import {emitDatePickedEvent} from "../event_emitter";

export default class extends Controller {
  addPerson() {
    const event = new CustomEvent("newPersonStarted", {
      detail: {
        callback: function(effectiveDate, newPersonAttributes) {
          const promise = fetch(`/reteamer_api/people/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                ...newPersonAttributes
              }
            )
          }).then(() => {
            emitDatePickedEvent(effectiveDate)
          });

          return promise;
        }
      }
    })
    window.dispatchEvent(event)
  }

  addTeam() {
    const event = new CustomEvent("newTeamStarted", {
      detail: {
        callback: function(effectiveDate, newTeamAttributes) {
          const promise = fetch(`/reteamer_api/teams/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                ...newTeamAttributes
              }
            )
          }).then(() => {
            emitDatePickedEvent(effectiveDate)
          });

          return promise;
        }
      }
    })
    window.dispatchEvent(event)
  }

  connect() {
  }
}
