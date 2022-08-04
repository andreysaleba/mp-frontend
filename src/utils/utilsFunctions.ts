import moment from "moment";

export function humanizeDate(date: Date) {
  const momentedDate = moment(date);

  if (moment().endOf("day").diff(momentedDate, "days") === 0) {
    return `Today ${getTime(momentedDate)}`;
  }

  if (moment().subtract(1, "day").endOf("day").diff(momentedDate, "days") === 0) {
    return `Yesterday ${getTime(momentedDate)}`;
  }

  return moment(date).format("MMMM Do YYYY, h:mm a");
}

function getTime(date: moment.Moment) {
  return date.format("h:mm a");
}

export function classes(...classesArray: string[]): string {
  return classesArray.join(' ');
}