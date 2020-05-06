import React from "react";

import {
  MONTHS,
  formatDate,
  daysInMonth,
  getStartOfMonth,
} from "./utils/index";

export function useDates() {
  let date = new Date();

  const [day, setDay] = React.useState<number | null>(date.getDate());
  const [monthIndex, setMonthIndex] = React.useState<number>(0);
  const [year, setYear] = React.useState<number>(2020);

  let month = MONTHS[monthIndex];
  let formattedDate = formatDate(new Date(year, monthIndex, day || 0));
  let daysInSelectedMonth = daysInMonth(monthIndex, year);
  let firstDayOfMonth = getStartOfMonth(year, monthIndex);

  React.useEffect(() => {
    setMonthIndex(new Date().getMonth());
    setYear(new Date().getFullYear());
  }, []);

  const onNextMonthHandler = () => {
    if (monthIndex === MONTHS.length - 1) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }

    setDay(null);
  };

  const onPreviousMonthHandler = () => {
    if (monthIndex === 0) {
      setMonthIndex(MONTHS.length - 1);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
    setDay(null);
  };

  return {
    onNextMonthHandler,
    onPreviousMonthHandler,
    day,
    setDay,
    year,
    month,
    formattedDate,
    daysInSelectedMonth,
    firstDayOfMonth,
  };
}

export default useDates;
