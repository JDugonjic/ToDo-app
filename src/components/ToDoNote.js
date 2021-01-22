import React, { forwardRef } from "react";
import styles from "../styles/ToDoNote.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import { db } from "../firebase";
import { IconButton } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/styles";

const ToDoNote = forwardRef(({ id, note, checked }, ref) => {
  const useStyles = makeStyles({
    checkbox: {
      color: "pink",
    },
  });

  const classes = useStyles();

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
    <div ref={ref} className={styles.todonote}>
      <Checkbox
        checked={checked}
        onChange={checkNote}
        className={classes.checkbox}
      />
      <h3 className={checked && styles.noteChecked}>{note}</h3>
      <IconButton onClick={deleteNote} className={styles.delete}>
        <DeleteOutlinedIcon className={styles.deleteButton} />
      </IconButton>
    </div>
  );
});

export default ToDoNote;
