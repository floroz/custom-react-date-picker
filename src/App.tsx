import React from "react";
import DatePicker from "./DatePicker/DatePicker";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <DatePicker />
    </div>
  );
}

export default App;
