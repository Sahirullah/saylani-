import React from 'react';
import './Hero.css';
import heroImage1 from '../assets/herosection1.png';
import heroImage2 from '../assets/herosection2.webp';
import heroImage3 from '../assets/hero section image.jpg';
import studentImage from '../assets/USA student.webp';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-text">Introducing Saylani</span>
            </div>
            
            <h1 className="hero-title">
              Empowering Communities
              <br />
              <span className="title-line2">Through Education &</span>
              <br />
              <span className="title-line3">Welfare Programs</span>
            </h1>
            
            <p className="hero-description">
              Transforming lives through comprehensive education, healthcare,
              <br />
              shelter, and community development initiatives.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary">
                <span>Get Started</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500K+</span>
                <span className="stat-label">lives impacted through our programs</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-visual">
              <div className="floating-circle circle-1">
                <img src={heroImage1} alt="Saylani Community Programs" />
              </div>
              
              <div className="floating-circle circle-2">
                <img src={heroImage2} alt="Saylani Education & Welfare" />
              </div>
              
              <div className="floating-circle circle-3">
                <img src={studentImage} alt="Students Learning with Technology" />
              </div>
              
              <div className="floating-circle circle-4">
                <div className="circle-content">
                  <div className="profile-icon">🤝</div>
                  <div className="profile-dots">
                    <span className="dot blue"></span>
                    <span className="dot orange"></span>
                    <span className="dot red"></span>
                    <span className="dot green"></span>
                  </div>
                </div>
              </div>
              
              <div className="floating-circle circle-5">
                <div className="award-content">
                  <div className="award-icon">🏆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;