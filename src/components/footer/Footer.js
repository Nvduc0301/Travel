import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer-list">
        <h2>BEACHES.</h2>
        <div className="footer-item">
          <h3>About Us</h3>
          <ul>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>Information</h3>
          <ul>
            <li>Contact</li>
            <li>Terms</li>
            <li>Policy</li>
            <li>Privacy</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>Follow Us</h3>
          <div className="footer-icon-list">
            <div className="footer-icon-item">
              <FaFacebook className="icon" />
              <span>Facebook</span>
            </div>
            <div className="footer-icon-item">
              <FaInstagram className="icon" />
              <span>Instagram</span>
            </div>
            <div className="footer-icon-item">
              <FaTwitter className="icon" />
              <span>Twitter</span>
            </div>
            <div className="footer-icon-item">
              <FaPinterest className="icon" />
              <span>Pinterest</span>
            </div>
            <div className="footer-icon-item">
              <FaYoutube className="icon" />
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
