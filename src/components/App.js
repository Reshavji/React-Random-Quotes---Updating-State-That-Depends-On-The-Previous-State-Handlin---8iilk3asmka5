import React, { useState, useEffect } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="main" style={{ backgroundColor: backgroundColor }}>
        <div className="quote-text">{quote}</div>
        <div className="quote-author">{author}</div>
        <button id="new-quote" class="button" onClick={fetchQuote}>Next Quote</button>
    </div>
  );
};

export default App;
