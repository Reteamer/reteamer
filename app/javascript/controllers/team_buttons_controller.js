import { Controller } from "@hotwired/stimulus"
import {emitDatePickedEvent} from "../event_emitter";

export default class extends Controller {
  editTeam({params: {team: teamString} = "{}"}) {
    const team = JSON.parse(decodeURIComponent(teamString));
    const event = new CustomEvent("teamEditStarted", {
      detail: {
        team: team,
        callback: function(effectiveDate, newTeamAttributes) {
          const promise = fetch(`/reteamer_api/teams/${team.key}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                "team": newTeamAttributes
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
