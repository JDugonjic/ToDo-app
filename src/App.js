import React, { useEffect } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import Header from "./components/Header";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./components/Login";
import AppBody from "./components/AppBody";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            userId: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app__container">
        {!user ? (
          <Login />
        ) : (
          <>
            <AppBody />
            {/*<Header />

            <ToDo userId={user.userId} />*/}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
