import React from 'react';
import './Footer.css';
import logo from '../assets/Saylani_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Logo and Description */}
            <div className="footer-section brand-section">
              <div className="footer-logo">
                <img src={logo} alt="Saylani Welfare" />
                <span className="footer-brand-text">Saylani Welfare</span>
              </div>
              <p className="footer-description">
                Transforming lives through education, healthcare, shelter, and community development. 
                Join us in building a better tomorrow for those in need.
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="stat-number">500K+</span>
                  <span className="stat-label">Lives Impacted</span>
                </div>
                <div className="footer-stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years of Service</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Our Programs</a></li>
                <li><a href="#success-stories">Success Stories</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#news-events">News & Events</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#donate">Donate Now</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-section">
              <h4 className="footer-title">Our Programs</h4>
              <ul className="footer-links">
                <li><a href="#programs">Education Support</a></li>
                <li><a href="#programs">Healthcare Services</a></li>
                <li><a href="#programs">Food Security</a></li>
                <li><a href="#programs">Housing & Shelter</a></li>
                <li><a href="#programs">Employment Assistance</a></li>
                <li><a href="#programs">Emergency Relief</a></li>
                <li><a href="#programs">Clean Water Initiative</a></li>
                <li><a href="#programs">Women Empowerment</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Our Locations</h4>
              <ul className="footer-links location-links">
                <li><span className="location-icon">📍</span> Main Campus - Karachi</li>
                <li><span className="location-icon">📍</span> Branch Campus - Hyderabad</li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="footer-section">
              <h4 className="footer-title">Stay Updated</h4>
              <p className="newsletter-text">
                Subscribe to our newsletter for the latest updates on our programs and impact.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
              
              {/* Social Media */}
              <div className="social-media">
                <h5 className="social-title">Follow Us</h5>
                <div className="social-links">
                  <a href="https://facebook.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                    <i className="fab fa-facebook-f social-icon"></i>
                  </a>
                  <a href="https://twitter.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                    <i className="fab fa-twitter social-icon"></i>
                  </a>
                  <a href="https://instagram.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                    <i className="fab fa-instagram social-icon"></i>
                  </a>
                  <a href="https://linkedin.com/company/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                    <i className="fab fa-linkedin-in social-icon"></i>
                  </a>
                  <a href="https://youtube.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                    <i className="fab fa-youtube social-icon"></i>
                  </a>
                  <a href="https://tiktok.com/@saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                    <i className="fab fa-tiktok social-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Saylani Welfare International Trust. All rights reserved.</p>
              <p className="developer-credit">
                Developed by <a href="mailto:sahirullah313@gmail.com" className="developer-link">Sahirullah</a>
              </p>
            </div>
            
            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms-of-use">Terms of Use</a>
              <span className="separator">|</span>
              <a href="/cookie-policy">Cookie Policy</a>
              <span className="separator">|</span>
              <a href="/refund-policy">Refund Policy</a>
            </div>
            

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;