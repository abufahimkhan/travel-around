import React, { useState } from "react";
import "./App.css";
import FeedbackSlider from "./FeedbackSlider";
import logo from "./assets/logo.png";
import ocen from "./assets/cover2.jpg";
import dessert from "./assets/dessertcar.jpg";
import plane from "./assets/plane.png";
// import Select from "react-select";
import Placecards from "./Placecards";
import Servicecards from "./Servicecards";

function LandingPage() {
  return (
    <div className="container">
      <section className="section-cover">
        <img src={plane} className="overly-image" />
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

      <div className="cards-header">
        <h1>Popular destinations</h1>
        <p>Unleash your Wanderlust with travel around</p>
      </div>
      <Placecards />

      <div className="service-container">
        <div className="cards-header">
          <h1>Our Services</h1>
          <p>Plan Easy, Pay less and Experience more</p>
        </div>

        <Servicecards />
      </div>
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
          <button type="button">Explore</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-column">
          <div className="footer-logo">
            <img className="footer-logo img" src={logo} alt="Logo" />
          </div>
          <p className="footer-logo-description">
            Plan easy, Pay less and Experience more. Unleash the possibilities
            of enchanting destinations, ensuring your holiday is wrapped in
            comfort and convenience.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-resources">
            <li>
              <a href="#">01704606893</a>
            </li>
            <li>
              <a href="#">Email:abufahimkhan1@gmail.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abu-fahim-shanto-11b2a2216/">
                Linkedin:abu-fahim-shanto
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-resources">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-resources">
            <li>
              <a href="#">Travels</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="copyright">&copy; 2023 Your Company</p>
    </div>
  );
}

export default LandingPage;
