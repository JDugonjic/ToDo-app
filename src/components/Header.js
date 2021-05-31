import React from 'react';
import useRandomQuote from '../app/hooks/useRandomQuote';
import { auth } from '../firebase';
import styles from '../styles/Header.module.css';
import Spinner from 'react-spinkit';

function Header() {
  const quote = useRandomQuote();
  return (
    <div className={styles.header}>
      <div onClick={() => auth.signOut()} className={styles.quote}>
        {quote === undefined ? (
          <>
            <Spinner name='circle' color='#053541' fadeIn='none' />
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
