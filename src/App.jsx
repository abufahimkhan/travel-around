import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className={`container ${menuOpen ? "menu-open" : ""}`}>
        <header className="header">
          <img className="logo" src={logo} alt="Logo" />
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="menu-items">
              <li>
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="places" smooth={true} duration={500}>
                  Travels
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="services" smooth={true} duration={500}>
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="explore" smooth={true} duration={500}>
                  About us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact Us
                </ScrollLink>
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
        <div id="home">
          <LandingPage />
        </div>
        <hr />
        <div id="places">
          <Placecards />
        </div>
        <div id="services">
          <Servicecards />
        </div>
        <div id="explore">
          <Explore />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
        <div className="scroll-to-top" onClick={scrollToTop}>
          Scroll To Top
        </div>
      </div>
    </Router>
  );
}

export default App;
