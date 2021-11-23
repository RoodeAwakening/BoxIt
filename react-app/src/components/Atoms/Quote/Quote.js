import React, { useEffect } from "react";
import styles from "./Quote.module.css";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  //get quote
  async function getQuote() {
    const response = await fetch("https://type.fit/api/quotes/");
    const data = await response.json();
    let pos = Math.floor(Math.random() * (1642 - 0));

    setQuote(`${data[pos].text} - ${data[pos].author}`);
  }

  return (
    <div className={styles.quote_of_the_day}>
      <h2>{quote}</h2>
    </div>
  );
}

export default Quote;
