import React from "react";
import styles from "../styles/Login.module.css";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../features/appSlice";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            userId: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginScreen__gradient} />
      <div className={styles.loginContainer}>
        <h1>TO DOO DO</h1>
        <h2>Welcome</h2>
        <p>Please sign in to start your journey</p>
        <div className={styles.button} onClick={signIn}>
          Sign in
        </div>
      </div>
    </div>
  );
}

export default Login;
