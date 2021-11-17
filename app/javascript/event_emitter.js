export function emitDatePickedEvent(newDate) {
  emitEvent("datePicked", {newDate})
}

export function  emitCompleteChangeEvent(selectedDate, eventName) {
  emitEvent(eventName, {selectedDate})
}

export function emitEvent(eventName, detail) {
  const event = new CustomEvent(eventName, { detail })
  window.dispatchEvent(event)
}
