export function emitDatePickedEvent(newDate) {
  const dateChangedEvent = new CustomEvent("datePicked",
    {
      detail: {
        newDate: newDate
      }
    }
  )
  window.dispatchEvent(dateChangedEvent)
}

export function  emitCompleteChangeEvent(selectedDate) {
  const event = new CustomEvent("completeChange",
    {
      detail: {
        selectedDate: selectedDate
      }
    }
  )
  window.dispatchEvent(event)
}
