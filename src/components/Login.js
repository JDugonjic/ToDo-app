import React from "react";
import styles from "../styles/Login.module.css";
import { Button } from "@material-ui/core";
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
      <div className={styles.loginContainer}>
        <Button className={styles.button} variant="outlined" onClick={signIn}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
