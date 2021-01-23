import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqOkGHhG3uE17cNobQRl5WJnaipBlXUo8",
  authDomain: "todo-app-8f168.firebaseapp.com",
  projectId: "todo-app-8f168",
  storageBucket: "todo-app-8f168.appspot.com",
  messagingSenderId: "873257176390",
  appId: "1:873257176390:web:4849e2ef0dfd9eff6a6947",
  measurementId: "G-L4YGB34NEK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
