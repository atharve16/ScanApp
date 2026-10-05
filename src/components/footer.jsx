import React from "react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
          <a href="/contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-main">
          <p className="footer-text">
            © {currentYear} <span className="footer-brand">ScanApp</span>. All
            rights reserved to Harsh Hasthkala.
          </p>
        </div>
      </div>

      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#b22222"
            fillOpacity="0.2"
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
