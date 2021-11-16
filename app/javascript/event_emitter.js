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

export function  emitCompleteChangeEvent(selectedDate, eventName) {
  const event = new CustomEvent(eventName,
    {
      detail: {
        selectedDate: selectedDate
      }
    }
  )
  window.dispatchEvent(event)
}
