import React from "react";
import "./Footer.css";
import { FaAd, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <footer id="footer">
       <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
          
        </div>
        <div className="footer-box">
        <h4>Contact Us</h4>
        <div className="footer-contact">
          <p>
            <FaAd /> &nbsp; Address: United States.
          </p>
          <p>
            <FaPhoneAlt /> &nbsp; Phone: +23453536464
          </p>
          <p>
            <FaFax /> &nbsp; Fax: +234535335.
          </p>
          <p>
            <FaEnvelope /> &nbsp; Email: info@socialx.com.ng
          </p>
          <p>
            <FaGlobe /> &nbsp; Website: www.socialx.com.ng
          </p>
        </div>
        </div>
        <div className="footer-box">
          <img src={logo} alt="logo" />
          <p className="u-small-text">
            &copy; Copyright 2024 SocialX.com
          </p>
        </div>
       </div>
    </footer>
  );
};

export default Footer;