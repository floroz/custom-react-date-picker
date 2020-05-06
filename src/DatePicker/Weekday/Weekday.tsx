import React from "react";
import styles from "./Weekday.module.scss";

interface IProps {
  title: string;
  label: string;
}

const Weekday = (props: IProps) => {
  return (
    <div className={styles.days} aria-label={props.label}>
      {props.title}
    </div>
  );
};

export default Weekday;
