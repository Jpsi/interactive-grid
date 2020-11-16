import React, { useState, useEffect } from "react";
import Card from "../Card";
import fetchData from "../../utils/fetchData";
import images from "../../utils/images";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => fetchData(setCards), []);

  return (
    <div className="app">
      <h1 className="title">This is a fixed grid</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <Card cardTitle={card.title} cardImage={images[card.type]} />
        ))}
      </div>
    </div>
  );
};

export default App;
