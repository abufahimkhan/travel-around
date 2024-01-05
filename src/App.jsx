import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import Placecards from "./Placecards";
import Servicecards from "./Servicecards";
import LandingPage from "./LandingPage"; 
import Explore from "./Explore";
import ContactUs from "./ContactUs";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };

  return (
    <Router basename="/subdirectory">
      <div className={`container ${menuOpen ? "menu-open" : ""}`}>
        <header className="header">
          <img className="logo" src={logo} alt="Logo" />
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="menu-items">
              <li>
              <Link><a href="/">Home</a></Link>
              </li>
              <li>
                <Link><a href="places">Travels</a></Link>
              </li>
              <li>
              <Link><a href="Service">Services</a></Link>
              </li>
              <li>
              <Link><a href="explore">About us</a></Link>
              </li>
              <li>
              <Link><a href="contact">Contact Us</a></Link>
              </li>
              <li>
                <p className="search-icon" onClick={handleExpand}>
                  🔎
                </p>
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search keyword"
                  id="search"
                />
              </li>
              <li>
                <button type="button" className="start-button">
                  Get Started
                </button>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="places" element={<Placecards />} />
          <Route path="Service" element={<Servicecards />} />
          <Route path="explore" element={<Explore />} />
          <Route path="contact" element={<ContactUs />} />
          {/* Add other routes as needed */}
        </Routes>
        <hr />
      </div>
    </Router>
  );
}

export default App;
