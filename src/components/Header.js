import React from "react";
import useRandomQuote from "../app/hooks/useRandomQuote";
import { auth } from "../firebase";
import styles from "../styles/Header.module.css";

function Header() {
  const quote = useRandomQuote();
  return (
    <div className={styles.header}>
      <div onClick={() => auth.signOut()} className={styles.quote}>
        {quote === "error" ? (
          <>
            <span>
              <h2>“Peace comes from within. Do not seek it without.”</h2>
            </span>
            <span>
              <p>Buddha</p>
            </span>
          </>
        ) : (
          <>
            <span>
              <h2>{`"${quote?.text}"`}</h2>
            </span>
            <span>
              <p>{quote?.author}</p>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
