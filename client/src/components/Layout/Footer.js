import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1 className="text-center">All Rights Reserved &copy;</h1>
        <p className="text-center mt-3">
          <Link to="/about" className="footer-link">
            About
          </Link>
          |
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          |
          <Link to="/policy" className="footer-link">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
