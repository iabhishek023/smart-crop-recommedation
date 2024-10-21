import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/soil-analysis" className="nav-link">Soil Analysis</Link>
      <Link to="/weather-forecast" className="nav-link">Weather Forecast</Link>
      <Link to="/crop-suggestion" className="nav-link">Crop Suggestion</Link>
      <Link to="/contact-us" className="nav-link">Contact Us</Link>
      <Link to="/about" className="nav-link">About</Link> {/* New About link */}
    </div>
  );
};

export default Navbar;


