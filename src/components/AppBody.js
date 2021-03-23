import React from "react";
import styles from "../styles/AppBody.module.css";
import Header from "./Header";
import ToDo from "./ToDo";

function AppBody({ userId }) {
  return (
    <div className={styles.appBody}>
      <div className={styles.gradient} />
      <div className={styles.header}>
        <Header />
      </div>
      <ToDo userId={userId} />
    </div>
  );
}

export default AppBody;
