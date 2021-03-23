import React from "react";
import { auth } from "../firebase";
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
      <div className={styles.appBodyContent}>
        <div>
          <ToDo userId={userId} />
        </div>
        <div onClick={() => auth.signOut()} className={styles.signOutButton}>
          Sign out
        </div>
      </div>
    </div>
  );
}

export default AppBody;
