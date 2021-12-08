import { Controller } from "@hotwired/stimulus"
import {emitDatePickedEvent} from "../event_emitter";

export default class extends Controller {
  deletePerson({ params: {personKey} = "" }) {
    const event = new CustomEvent("personDeactivated",
      {
        detail: {
          callback: function(effectiveDate) {
            fetch("/reteamer_api/people/"+personKey, {
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
          }
        }
      }
    )
    window.dispatchEvent(event)
  }
}
