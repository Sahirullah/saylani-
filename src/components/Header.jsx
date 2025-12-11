import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/Saylani_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <img src={logo} alt="Saylani Welfare" className="logo" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#news-events">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
          </button>
          <button className="btn btn-outline">Join Us</button>
          <a href="#donate" className="btn btn-primary donate-btn">
            <span className="btn-text">Donate Now</span>
            <span className="btn-icon">❤️</span>
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;