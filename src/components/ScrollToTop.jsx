import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true); // Temporarily set to true for testing

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    console.log('ScrollToTop button clicked!'); // Debug log
    
    // Try multiple methods to ensure compatibility
    try {
      // Method 1: Modern smooth scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.log('Method 1 failed, trying fallback');
      // Method 2: Fallback for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    
    // Method 3: Additional fallback using scrollIntoView
    const topElement = document.getElementById('home') || document.body;
    if (topElement && topElement.scrollIntoView) {
      topElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="scroll-icon">↑</span>
    </button>
  );
};

export default ScrollToTop;