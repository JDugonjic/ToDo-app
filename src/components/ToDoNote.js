import React from "react";
import styles from "../styles/ToDoNote.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import { db } from "../firebase";
import { IconButton } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

function ToDoNote({ id, note, checked }) {
  const checkNote = () => {
    if (!checked) {
      db.collection("notes").doc(id).set(
        {
          checked: true,
        },
        {
          merge: true,
        }
      );
    }
  };

  const deleteNote = () => {
    if (id) {
      db.collection("notes").doc(id).delete();
    }
  };

  return (
    <div className={styles.todonote}>
      <Checkbox onChange={checkNote} className={styles.checkbox} />
      <h3 className={checked && styles.noteChecked}>{note}</h3>
      <IconButton onClick={deleteNote} className={styles.delete}>
        <DeleteOutlinedIcon className={styles.deleteButton} />
      </IconButton>
    </div>
  );
}

export default ToDoNote;
