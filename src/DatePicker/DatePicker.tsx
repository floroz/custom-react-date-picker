import React from "react";
import Weekday from "./Weekday/Weekday";
import styles from "./DatePicker.module.scss";
import useDates from "./useDates";
import { abbreviateWeekday, WEEKDAYS, getArrayOfDays } from "./utils/index";

interface IProps {}

const DatePicker = (props: IProps) => {
  const {
    year,
    day,
    setDay,
    month,
    onNextMonthHandler,
    onPreviousMonthHandler,
    formattedDate,
    daysInSelectedMonth,
    firstDayOfMonth,
  } = useDates();

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
        {getArrayOfDays(daysInSelectedMonth, firstDayOfMonth).map(
          (d: number) => (
            <div
              key={Math.random()}
              className={`${styles.days} ${d === day && styles.selectedDay} ${
                d !== 0 && styles.border
              }`}
              onClick={() => setDay(d)}
            >
              {d !== 0 && d}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DatePicker;
