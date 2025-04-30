import React from "react";
import {Phone} from 'lucide-react';
import ig from '../assets/insta.png'
import email from '../assets/mail.png'
import fb from '../assets/fb.png'
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <img src={ig} alt="insta" />
        <img src={fb} alt="fb" />
        <img src={email} alt="email" />
        <Phone size={32}/>
      </div>

      <hr className="divider" />

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Condition</a>
      </nav>

      <p className="footer-copy">
        Copyright 2025 &copy; <strong>ICONScribe</strong>
      </p>
    </footer>
  );
};

export default Footer;
