import dayjs from "dayjs"

export function toISODate(myDate) {
  return dayjs(myDate).format(isoDate)
}

export function newISODate() {
  return toISODate(new Date())
}

export const peopleDate = "ddd, MMM D, YYYY";
export const isoDate = "YYYY-MM-DD";

export function getNextMonday(startDay = dayjs()) {
  let nextMonday = null
  if(startDay.day() == 0) {
    nextMonday = startDay.add(1, "days")
  } else {
    nextMonday = startDay.add(8 - startDay.day(), "days")
  }
  return nextMonday;
}

export function getPreviousMonday(startDay = dayjs()) {
  /*
  DAY   NUMBER  DIST
  Sun   0       -6
  Mon   1       -7
  Tue   2       -1
  Wed   3       -2
  Thur  4       -3
  Fri   5       -4
  Sat   6       -5
   */

  let previousMonday = null
  if(startDay.day() == 0) {
    previousMonday = startDay.subtract(6, "days")
  } else if(startDay.day() == 1) {
    previousMonday = startDay.subtract(7, "days")
  } else {
    previousMonday = startDay.subtract(startDay.day()-1, "days")
  }
  return previousMonday;
}

