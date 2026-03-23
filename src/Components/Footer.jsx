import React from "react";
import grocifylogo from "../assets/grocifylogo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="left">
        <img src={grocifylogo} alt="" />
        <p>
          Bred for a high content of beneficial substances. Our products are all
          fresh and healthy.
        </p>
        <span>2025 © All Rights Reserved</span>
      </div>

      <div className="footer-right">
        <div className="footer-right-box">
          <span>Compony</span>
          <ul>
            <li>About</li>
            <li>FAQ'S</li>
          </ul>
        </div>

        <div className="footer-right-box">
          <span>Support</span>
          <ul>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-right-box ">
          <span>Stay Connected</span>
          <ul>
            <p>Questions or Feeback? We'd love to hear from you.</p>
            <div className="subscribe">
              <input type="text" placeholder="Email Address" />
              <button className="send-icon-box">
                <FontAwesomeIcon icon={faAngleRight} className="send-icon" />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
