import { useEffect, useState } from "react";

function useRandomQuote() {
  const [quote, setQuote] = useState([]);

  const fetchQuotes = async () => {
    return await fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomNum = Math.floor(Math.random() * data.length + 1);

        setQuote(data[randomNum]);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return quote;
}

export default useRandomQuote;
