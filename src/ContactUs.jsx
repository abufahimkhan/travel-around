import "./App.css";
import logo from "./assets/logo.png";

function ContactUs() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-column">
          <div className="footer-logo">
            <img className="footer-logo img" src={logo} alt="Logo" />
          </div>
          <p className="footer-logo-description">
            Plan easy, Pay less and Experience more.
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
    </div>
  );
}

export default ContactUs;
