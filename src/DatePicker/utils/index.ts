export function abbreviateWeekday(weekday: string): string {
  return weekday.substr(0, 3);
}

export const WEEKDAYS: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * https://stackoverflow.com/questions/315760/what-is-the-best-way-to-determine-the-number-of-days-in-a-month-with-javascript
 */
export function daysInMonth(monthIndex: number, year: number): number {
  return new Date(year, monthIndex, 0).getDate();
}

export function formatDate(date: Date): string {
  let day: string | number = date.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  let month: string | number = date.getMonth() + 1;

  if (month < 10) {
    month = "0" + month;
  }
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getStartOfMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex).getDay();
}
