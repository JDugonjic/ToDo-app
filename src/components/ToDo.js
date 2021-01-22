import React, { useEffect, useState } from "react";
import styles from "../styles/ToDo.module.css";
import ToDoNote from "./ToDoNote";
import { db } from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function ToDo() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  const sendNote = (e) => {
    e.preventDefault();
    db.collection("notes").add({
      user: "Jelena",
      note: input.charAt(0).toUpperCase() + input.substring(1, input.length),
      checked: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("notes")
      .orderBy("timestamp", "asc")
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

  console.log(notes);

  return (
    <div className={styles.todo}>
      <div className={styles.input}>
        <form>
          <input
            placeholder="Add To Do"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendNote} type="submit"></button>
        </form>
      </div>
      <div className={styles.todoList}>
        <FlipMove>
          {notes.map(({ id, data: { note, checked } }) => (
            <ToDoNote key={id} id={id} note={note} checked={checked} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default ToDo;
