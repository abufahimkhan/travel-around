import React, { useState } from "react";
import "./App.css";
import FeedbackSlider from "./FeedbackSlider";
import records from "./records.json";
import services from "./service.json";

import logo from "./assets/logo.png";
import ocen from "./assets/cover2.jpg";
import dessert from "./assets/dessertcar.jpg";
import plane from './assets/plane.png'
import Select from "react-select";
import Placecards from "./Placecards";
import Servicecards from "./Servicecards";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  const handleExpand = () => {
    const search = document.querySelector(".search-input");
    search.classList.toggle("search-expanded");
  };

  return (
    <div className={`container ${menuOpen ? "menu-open" : ""}`}>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="menu-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#travels">Travels</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#about-us">About us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
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
      <hr />

      <section className="section-cover">
      <img src={plane} className="overly-image"/>
        <section className="section-cover-container">
          <section className="section-cover-one">
            <h1>Plan easy, Pay less</h1>
            <h1>and Experience more</h1>
            <p>
              Unleash the possibilities of enchanting
              <br />
              destinations, ensuring your holiday is wrapped in
              <br />
              comfort and convenience.
            </p>
            <img className="section-two-image" src={ocen} alt="ocean" />
           
          </section>
         
          <section className="section-cover-two">
            <img className="section-one-image" src={dessert} alt="dessert" />
          </section>
        </section>
        {/* <section className="section-search">
            <div className="search-overlay"></div>
            <div className="search-content">
            
              <div className="option">
                <p>Destination</p>
                <Select options={options} />
              </div>
              
              <div className="option">
                <p>Average price</p> <Select options={options} />
              </div>
             
              <div className="option">
                <p>Date</p> <Select options={options} />
              </div>
              <button className="search-btn">Search</button>
            </div>
          </section>  */}
      </section>
     
      <hr />
      <div className="cards-header">
        <h1>Popular destinations</h1>
        <p>Unleash your Wanderlust with travel around</p>
      </div>
      <Placecards />
      <hr />
      <div className="service-container">
        <div className="cards-header">
          <h1>Our Services</h1>
          <p>Plan Easy, Pay less and Experience more</p>
        </div>

        <Servicecards />
      </div>
      <hr />
      <div className="feedback-slider-container">
        <div className="cards-header">
          <h1>Love From Our Travellers</h1>
          <p>satisfied customers are our biggest ads</p>
        </div>
        <FeedbackSlider />
      </div>
     

        <div className="explore-container">
        
          <div className="cards-header">
            <h1>Explore the world</h1>
            <p>Plan Easy Pay Less & Experience More</p>
          </div>
          <div className="explore">
          <input
                type="search"
                placeholder="Enter Your Email Here"
                id="search"
              />
              <button type="button" className="explore-now">
                Explore Now
              </button>
          </div>
        </div>
        <hr />
        <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">
        <img className="footer-logo img" src={logo} alt="Logo" />
        </div>
        {/* <p className="footer-description">Your logo description goes here.</p> */}
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Contact</h3>
        <ul className="footer-resources">
          <li><a href="#">01704606893</a></li>
          <li><a href="#">Email:abufahimkhan1@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/abu-fahim-shanto-11b2a2216/">Linkedin:abu-fahim-shanto</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Company</h3>
        <ul className="footer-resources">
          <li><a href="#">About us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Resources</h3>
        <ul className="footer-resources">
          <li><a href="#">Travels</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Reviews</a></li>
        </ul>
      </div>
     
          
        </footer>
        <p  className="copyright">&copy; 2023 Your Company</p>
      </div>

    
  );
}

export default App;
