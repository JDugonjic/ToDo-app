import React from "react";
import useRandomQuote from "../app/hooks/useRandomQuote";
import { auth } from "../firebase";
import styles from "../styles/Header.module.css";

function Header() {
  const quote = useRandomQuote();

  return (
    <div className={styles.header}>
      <div onClick={() => auth.signOut()} className={styles.quote}>
        {!quote ? (
          <>
            <span>
              <h2>{`"${quote?.text}"`}</h2>
            </span>
            <span>
              <p>{quote?.author}</p>
            </span>
          </>
        ) : (
          <>
            <span>
              <h2>SIGN OUT</h2>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
