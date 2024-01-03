import React, { useState } from "react";
import "./App.css";

import services from "./service.json";

function Servicecards() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="service-container">
      {services.map((getservics) => (
        <div className="service-cards" key={getservics.id}>
          <img
            className="cards-img"
            src={getservics.image}
            alt={getservics.id}
          />
          <h2 className="service-title">{getservics.title}</h2>
          <p className="service-description">{getservics.description}</p>
          <button className="service-more">See More</button>
        </div>
      ))}
    </div>
  );
}

export default Servicecards;
