import {emitDatePickedEvent} from "../../event_emitter";

export default function deletePerson(personData) {
  const event = new CustomEvent("personDeactivated",
    {
      detail: {
        data: personData,
        callback: function(effectiveDate) {
          fetch("/reteamer_api/people/"+personData.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                "key": personData.id
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
};
