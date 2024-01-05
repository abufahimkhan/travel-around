import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
      <div className="cards-header">
        <h1>Popular destinations</h1>
        <p>Unleash your Wanderlust with travel around</p>
      </div>
      <div className="cards-container">
        {records.map((getData, index) => (
          <div
            className={`cards ${
              index >= 3 && !showAllCards ? "hidden-card" : ""
            }`}
            key={getData.id}
          >
            <p className="place-rating">⭐{getData.rating}</p>
            <img
              className="cards-img"
              src={getData.image}
              alt={getData.country}
            />
            <div className="positions-horizontal">
              <div className="positions-vertical">
                <h3 className="title">🌎{getData.country}</h3>
                <p className="city">🔰 {getData.city}</p>
              </div>
              <button className="seemore">See more</button>
            </div>
          </div>
        ))}
      </div>

      {records.length > 3 && (
        <div className="see-more-container">
          <button className="see-more-btn" onClick={toggleCards}>
            {showAllCards ? (
              <>
                <FaChevronUp />
              </>
            ) : (
              <>
                <FaChevronDown />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default Placecards;
