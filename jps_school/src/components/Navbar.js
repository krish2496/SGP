import React from "react";
import { Link } from "react-router-dom"; // Use Link for routing
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <ul className="navbar-links">
          <li>Alumni</li>
          <li>Careers</li>
          <li>NIRF</li>
          <li>IQAC</li>
          <li>Scholarship</li>
          <li>Student Corner</li>
          <li>
            <Link to="/contact" className="navbar-link">Contact Us</Link> {/* Correct routing */}
          </li>
          <li>Online Programmes</li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img src="/images/jps.jpeg" alt="JPS School Logo" />
          <span>JPS School</span>
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          
          <li>
            <Link to="/news" className="navbar-link">Our offer</Link>
          </li>

          <li>
            <Link to="/Informations" className="navbar-link">Information</Link>
          </li>
          <li>
            <Link to="/teacher" className="navbar-link">Teachers</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link highlight">Contact Us</Link> {/* Proper Link */}
          </li>
          <li>
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
