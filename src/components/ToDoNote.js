import React, { forwardRef, useEffect, useState } from "react";
import styles from "../styles/ToDoNote.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import { db } from "../firebase";
import { IconButton } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/styles";
import InlineEdit from "./InlineEdit";

const ToDoNote = forwardRef(({ id, note, checked, userId }, ref) => {
  const useStyles = makeStyles({
    checkbox: {
      color: "lightgray",
    },
  });

  const classes = useStyles();

  const checkNote = () => {
    if (!checked) {
      db.collection("users").doc(userId).collection("notes").doc(id).set(
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
      db.collection("users").doc(userId).collection("notes").doc(id).delete();
    }
  };

  const [text, setStoredText] = useState([note]);

  useEffect(() => {
    if (note) {
      db.collection("users").doc(userId).collection("notes").doc(id).set(
        {
          note: text,
        },
        {
          merge: text,
        }
      );
    }
  }, [note, userId, id, text]);

  return (
    <div ref={ref} className={styles.todonote}>
      <Checkbox
        checked={checked}
        onChange={checkNote}
        className={classes.checkbox}
      />
      <h3 className={checked && styles.noteChecked}>
        <InlineEdit text={text} onSetText={(text) => setStoredText(text)} />
      </h3>
      <IconButton onClick={deleteNote} className={styles.delete}>
        <DeleteOutlinedIcon className={styles.deleteButton} />
      </IconButton>
    </div>
  );
});

export default ToDoNote;
