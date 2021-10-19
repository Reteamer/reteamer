export function toISODate(myDate) {
  return myDate.toISOString().split('T')[0]
}

export function newISODate() {
  return toISODate(new Date())
}
