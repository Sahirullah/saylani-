import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';
import JoinUsDropdown from './JoinUsDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isJoinDropdownOpen, setIsJoinDropdownOpen] = useState(false);
  const joinButtonRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleJoinDropdown = () => {
    setIsJoinDropdownOpen(!isJoinDropdownOpen);
  };

  const closeJoinDropdown = () => {
    setIsJoinDropdownOpen(false);
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

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (isJoinDropdownOpen && !event.target.closest('.join-us-container')) {
        setIsJoinDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isJoinDropdownOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="Saylani Welfare" className="logo" />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/programs" className={location.pathname === '/programs' ? 'active' : ''}>Programs</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
            <li><Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
          </button>
          <div className="join-us-container">
            <button 
              ref={joinButtonRef}
              className="btn btn-outline" 
              onClick={toggleJoinDropdown}
            >
              Join Us
            </button>
            <JoinUsDropdown 
              isOpen={isJoinDropdownOpen} 
              onClose={closeJoinDropdown}
              buttonRef={joinButtonRef}
            />
          </div>
          <Link to="/donate" className="btn btn-primary donate-btn">
            <span className="btn-text">Donate Now</span>
            <span className="btn-icon">❤️</span>
          </Link>
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