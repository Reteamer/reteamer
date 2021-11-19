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
  let today = dayjs().day();

  if(today === 0) {
    return dayjs().day(8);
  } else {
    return dayjs().day(9-today);
  }
}

