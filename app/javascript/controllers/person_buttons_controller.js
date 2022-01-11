import { Controller } from "@hotwired/stimulus"
import {emitDatePickedEvent} from "../event_emitter";

export default class extends Controller {
  editPerson({params: {person: personString} = "{}"}) {
    const person = JSON.parse(decodeURIComponent(personString));
    const event = new CustomEvent("personEditStarted", {
      detail: {
        person: person,
        callback: function(effectiveDate, newPersonAttributes) {
          const promise = fetch(`/reteamer_api/people/${person.key}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                "person": newPersonAttributes
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

  editOpenReq({params: {person: personString} = "{}"}) {
    const openReq = JSON.parse(decodeURIComponent(personString));
    const event = new CustomEvent("openReqEditStarted", {
      detail: {
        openReq: openReq,
        callback: function(effectiveDate, newOpenReqAttributes) {
          const promise = fetch(`/reteamer_api/open_reqs/${openReq.key}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                "open_req": newOpenReqAttributes
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

  deletePerson({ params: {personKey} = "" }) {
    const event = new CustomEvent("personDeactivationStarted",
      {
        detail: {
          callback: function(effectiveDate) {
            const promise = fetch(`/reteamer_api/people/${personKey}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              body: JSON.stringify(
                {
                  "effective_at": effectiveDate,
                  "key": personKey
                }
              )
            }).then(() => {
              emitDatePickedEvent(effectiveDate)
            });

            return promise;
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
