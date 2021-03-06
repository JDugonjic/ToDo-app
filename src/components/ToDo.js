import React, { useEffect, useState } from "react";
import styles from "../styles/ToDo.module.css";
import ToDoNote from "./ToDoNote";
import { db } from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../features/appSlice";

function ToDo({ userId }) {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);
  const user = useSelector(selectUser);

  const sendNote = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(userId)
      .collection("notes")
      .add({
        note: input.charAt(0).toUpperCase() + input.substring(1, input.length),
        checked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(userId)
      .collection("notes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setNotes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={styles.todo}>
      <div className={styles.input}>
        <form onSubmit={sendNote}>
          <input
            placeholder="Add To Do"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button type="submit"></button>
        </form>
      </div>
      <div className={styles.todoList}>
        <FlipMove>
          {notes.map(({ id, data: { note, checked } }) => (
            <ToDoNote
              userId={userId}
              key={id}
              id={id}
              note={note}
              checked={checked}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default ToDo;
