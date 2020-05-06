import React from "react";
import Weekday from "./Weekday/Weekday";
import styles from "./DatePicker.module.scss";
import {
  abbreviateWeekday,
  WEEKDAYS,
  MONTHS,
  formatDate,
  daysInMonth,
} from "./utils/index";

interface IProps {}

const DatePicker = (props: IProps) => {
  let date = new Date();
  const [day, setDay] = React.useState(date.getDate());
  const [monthIndex, setMonthIndex] = React.useState<number>(0);
  const [year, setYear] = React.useState<number>(2020);

  let month = MONTHS[monthIndex];
  let formattedDate = formatDate(new Date(year, monthIndex, day));
  let daysInSelectedMonth = daysInMonth(monthIndex, year);

  React.useEffect(() => {
    let selectedDate = date;
    let selectedDay = date.getDate();
    let selectedMonth = date.getMonth();
    let selectedYear = date.getFullYear();

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

  const renderDays = (numberOfDays: number) => {
    let days = [];
    for (let i = 1; i <= numberOfDays; i++) {
      days.push(i);
    }

    return days.map((day: number) => (
      <div key={day} className={styles.days}>
        {day}
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
        {renderDays(daysInSelectedMonth)}
      </div>
    </div>
  );
};

export default DatePicker;
