import React from "react";
import { auth } from "../firebase";
import styles from "../styles/AppBody.module.css";
import Header from "./Header";
import ToDo from "./ToDo";
import SettingsIcon from "@material-ui/icons/Settings";
import Settings from "./Settings";
import { useDispatch, useSelector } from "react-redux";
import {
  openSettings,
  selectDarkMode,
  selectSettingsIsOpen,
  selectShowQuotes,
} from "../features/settingsSlice";

function AppBody({ userId }) {
  const settingsIsOpen = useSelector(selectSettingsIsOpen);
  const dispatch = useDispatch();
  const showQuotes = useSelector(selectShowQuotes);
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={styles.appBody}>
      {darkMode ? (
        <div className={styles.gradientDarkMode} />
      ) : (
        <div className={styles.gradient} />
      )}
      <div className={styles.header}>{showQuotes && <Header />}</div>
      <div className={styles.appBodyContent}>
        <div>
          <ToDo userId={userId} />
        </div>
        <div className={styles.bottomButtons}>
          <div onClick={() => auth.signOut()} className={styles.signOutButton}>
            Sign out
          </div>
          <SettingsIcon
            onClick={() => dispatch(openSettings())}
            className={styles.settingsIcon}
          />
        </div>{" "}
        {settingsIsOpen && <Settings />}
      </div>
    </div>
  );
}

export default AppBody;
