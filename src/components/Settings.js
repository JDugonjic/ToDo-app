import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSettings,
  selectShowQuotes,
  closeQuotes,
  openQuotes,
  darkMode,
  lightMode,
} from "../features/settingsSlice";
import styles from "../styles/Settings.module.css";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

function Settings() {
  const dispatch = useDispatch();
  const showQuotes = useSelector(selectShowQuotes);

  console.log("www", showQuotes);

  return (
    <div className={styles.settings}>
      <div className={styles.settingsHeader}>
        <p className={styles.title}>Settings</p>
        <HighlightOffRoundedIcon
          onClick={() => dispatch(closeSettings())}
          className={styles.close}
        />
      </div>
      <div className={styles.settingsQuotes}>
        <p className={styles.titleSettingsQuotes}>Quotes</p>

        {showQuotes ? (
          <ToggleOnIcon
            onClick={() => dispatch(closeQuotes())}
            className={styles.toggleOn}
          />
        ) : (
          <ToggleOffIcon
            onClick={() => dispatch(openQuotes())}
            className={styles.toggleOn}
          />
        )}
      </div>
      <div className={styles.settingsQuotes}>
        <p className={styles.titleSettingsCustomize}>Customize</p>
      </div>
      <div className={styles.themeBox}>
        <p className={styles.themeTitle}>Theme</p>
        <div className={styles.themeBoxChoice}>
          <p onClick={() => dispatch(darkMode())} className={styles.dark}>
            Dark
          </p>
          <p onClick={() => dispatch(lightMode())} className={styles.light}>
            Light
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;