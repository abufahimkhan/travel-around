import React, { useState } from "react";
import "./App.css";
import records from "./records.json";

function Placecards() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className={`${menuOpen ? "menu-open" : ""}`}>

      <div className="cards-container">
        {records.slice(0, showAllCards ? records.length : 3).map((getData) => (
          <div className="cards" key={getData.id}>
            <p className="place-rating">⭐{getData.rating}</p>
            <img className="cards-img" src={getData.image} alt={getData.country} />
            <h3 className="title">{getData.country}</h3>
            
            <p className="description">🔰 {getData.city}</p>
            <button className="seemore">See more</button>
          </div>
        ))}
      </div>

      {records.length > 10 && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={toggleCards}>
            {showAllCards ? "See Less" : "See More"}
          </button>
        </div>
      )}

    </div>
  );
}

export default Placecards;
