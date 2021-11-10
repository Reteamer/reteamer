import dayjs from "dayjs"

export function toISODate(myDate) {
  return dayjs(myDate).format("YYYY-MM-DD")
}

export function newISODate() {
  return toISODate(new Date())
}
