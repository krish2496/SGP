import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt className="footer-icon" /> +91 9978506929</p>
          <p><FaEnvelope className="footer-icon" /> Jpsschool2012@gmail.com</p>
          <p><FaMapMarkerAlt className="footer-icon" /> jps School,Kalavad ,Jamnagar,
          Gujarat 361160, India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="icons-container">
            <a href="https://www.instagram.com/thejpsschool/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100066474881001" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaFacebookF className="icon" />
            </a>
            <a href="http://www.youtube.com/@jpsschool7513" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#" className="link">About Us</a></li>
            <li><a href="#" className="link">Admissions</a></li>
            <li><a href="#" className="link">Programs</a></li>
            <li><a href="#" className="link">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 JPS School. All rights reserved.</p>
        <div className="links-container">
          <a href="#" className="link">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#" className="link">Website Accessibility</a>
          <span className="separator">|</span>
          <a href="#" className="link">Manage Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
