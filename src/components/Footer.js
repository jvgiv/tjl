import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Instagram } from "../images/ig.svg";
import { ReactComponent as Facebook } from "../images/fb.svg";
import tjLogoWhite from "../images/black-white.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-inner">
          <img src={tjLogoWhite} alt="TJ Luxury Group Logo" width={220} />
          <div style={{ fontSize: 13, lineHeight: 2 }}>
            <div className="footer-location">
              <h4>Location:</h4>
              Based in New York, New York.
            </div>
            <div className="footer-social">
              <h4>Follow us:</h4>
              <a
                href="https://www.instagram.com/tjluxurygroup/"
                target="_blank"
                rel="noopener noreferrer"
                alt="TJ Luxury Group Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/tjluxurygroup/"
                target="_blank"
                rel="noopener noreferrer"
                alt="TJ Luxury Group Facebook"
              >
                <Facebook />
              </a>
            </div>
            <div className="footer-contact">
              <h4>Contact:</h4>
              <a href="mailto:tracy@tjluxurygroup.com">
                tracy@tjluxurygroup.com
              </a>
              <a href="mailto:james@tjluxurygroup.com">
                james@tjluxurygroup.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-inner">
          <h4 className="quick-links">Quick Links</h4>
          <NavLink className="footer-link" activeClassName="" to="/brand">
            Our Strategy
          </NavLink>
          <NavLink className="footer-link" activeClassName="" to="/ourstory">
            Our Story
          </NavLink>
          <NavLink className="footer-link" activeClassName="" to="/leadership">
            Leadership
          </NavLink>
          <NavLink className="footer-link" activeClassName="" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="footer-link" activeClassName="" to="/contact">
            Contact Us
          </NavLink>
        </div>
        {/* 
        <div className="footer-inner">
          <div>
            <h4>New York, NY</h4>
          </div>
        </div>*/}

        {/* <div className="footer-inner">
          <h2>Work with us.</h2>
          <Link to="/contact" className="contact-link">
            Contact Us
          </Link>
           <div className="logo-container">
            <a
              className="footer-logos"
              href="https://www.instagram.com/tjluxurygroup/"
              target="blank"
              alt="TJ Luxury Group Instagram"
            >
              <Instagram
                className="
            footer-insta-button"
              />
            </a>
            <a
              className="footer-logos"
              href="https://www.facebook.com/tjluxurygroup/"
              target="blank"
              alt="TJ Luxury Group Facebook"
            >
              <Facebook
                className="
            footer-fb-button"
              />
            </a>
          </div>
          
        </div>*/}
      </footer>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} TJ Luxury Group.</p>
        <p>
          Website by{" "}
          <a
            href="http://www.johngibbonsiv.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Gibbons
          </a>{" "}
          and{" "}
          <a
            href="https://www.taslim.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taslim Yakub
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
