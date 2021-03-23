import React from "react";
import styles from "../styles/AppBody.module.css";
import Header from "./Header";

function AppBody() {
  return (
    <div className={styles.appBody}>
      <div className={styles.gradient} />
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
}

export default AppBody;
