import dayjs from "dayjs"

export function toISODate(myDate) {
  return dayjs(myDate).format(isoDate)
}

export function newISODate() {
  return toISODate(new Date())
}

export const peopleDate = "ddd, MMM D, YYYY";
export const isoDate = "YYYY-MM-DD";

export function getNextMonday() {
  let today = dayjs()
  let nextMonday = null
  if(today.day() == 0) {
    nextMonday = today.add(1, "days")
  } else {
    nextMonday = today.add(8 - today.day(), "days")
  }
  return nextMonday;
}

