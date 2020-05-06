import React from "react";
import Weekday from "./Weekday/Weekday";
import styles from "./DatePicker.module.scss";
import {
  abbreviateWeekday,
  WEEKDAYS,
  MONTHS,
  formatDate,
  daysInMonth,
  getStartOfMonth,
} from "./utils/index";

interface IProps {}

const DatePicker = (props: IProps) => {
  let date = new Date();

  let initialDate = new Date();
  let initialDay = initialDate.getDay();
  let initialMonth = initialDate.getMonth();
  let initialYear = initialDate.getFullYear();

  const [day, setDay] = React.useState(date.getDate());
  const [monthIndex, setMonthIndex] = React.useState<number>(0);
  const [year, setYear] = React.useState<number>(2020);

  let month = MONTHS[monthIndex];
  let formattedDate = formatDate(new Date(year, monthIndex, day));
  let daysInSelectedMonth = daysInMonth(monthIndex, year);
  let firstDayOfMonth = getStartOfMonth(year, monthIndex);

  React.useEffect(() => {
    setMonthIndex(date.getMonth());
    setYear(date.getFullYear());
  }, []);

  const onNextMonthHandler = () => {
    if (monthIndex === MONTHS.length - 1) {
      setMonthIndex(0);
      setYear(year + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const onPreviousMonthHandler = () => {
    if (monthIndex === 0) {
      setMonthIndex(MONTHS.length - 1);
      setYear(year - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const renderDays = (numberOfDays: number, firstDay: number) => {
    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(0);
    }

    for (let i = 1; i <= numberOfDays; i++) {
      days.push(i);
    }

    return days.map((d: number) => (
      <div
        key={Math.random()}
        className={`${styles.days} ${
          d === day && initialMonth === monthIndex && styles.selectedDay
        }`}
        onClick={() => setDay(d)}
      >
        {d !== 0 && d}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedDate}>{formattedDate}</div>
      <div className={styles.dates}>
        <div className={styles.arrow} onClick={onPreviousMonthHandler}>
          &lt;
        </div>
        <div className={styles.month}>
          {month} {year}
        </div>
        <div className={styles.arrow} onClick={onNextMonthHandler}>
          &gt;
        </div>
      </div>
      <div className={styles.grid}>
        {WEEKDAYS.map((weekday: string, index: number) => (
          <Weekday
            title={abbreviateWeekday(weekday)}
            label={weekday}
            key={index}
          />
        ))}
        {renderDays(daysInSelectedMonth, firstDayOfMonth)}
      </div>
    </div>
  );
};

export default DatePicker;
