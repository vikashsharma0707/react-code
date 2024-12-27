// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Footer.css"
 // Import your CSS styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
