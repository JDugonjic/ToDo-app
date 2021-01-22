import React from "react";
import useRandomQuote from "../app/hooks/useRandomQuote";
import styles from "../styles/Header.module.css";

function Header() {
  const quote = useRandomQuote();

  return (
    <div className={styles.header}>
      <div className={styles.quote}>
        <span>
          <h2>{`"${quote?.text}"`}</h2>
        </span>
        <span>
          <p>{quote?.author}</p>
        </span>
      </div>
    </div>
  );
}

export default Header;
