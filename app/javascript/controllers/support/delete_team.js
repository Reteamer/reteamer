import {emitDatePickedEvent} from "../../event_emitter";

export default function deleteTeam(teamData) {
  const event = new CustomEvent("teamDeactivated",
    {
      detail: {
        data: teamData,
        callback: function(effectiveDate) {
          fetch("/reteamer_api/teams/"+teamData.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(
              {
                "effective_at": effectiveDate,
                "key": teamData.id
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
