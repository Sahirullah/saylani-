import React, { useState } from 'react';
import './Programs.css';

// Import local images
import gallerypic2 from '../assets/gallerypic2.jpg';
import gallerypic3 from '../assets/gallerypic3.jpg';
import gallerypic4 from '../assets/gallerypic4.webp';
import gallerypic5 from '../assets/gallerypic5.jpg';
import pic1 from '../assets/pic1.webp';
import studentImage from '../assets/gallerypic2.jpg';

const Programs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const programCategories = [
    {
      id: 'education',
      title: 'Education Support',
      icon: '🎓',
      description: 'Empowering minds through quality education and skill development programs for a brighter future.',
      image: studentImage,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      programs: [
        { name: 'Free Schools & Colleges', count: '50+' },
        { name: 'Scholarship Programs', count: '25K+' },
        { name: 'Skill Training Centers', count: '15+' },
        { name: 'IT & Digital Literacy', count: '100+' }
      ],
      stats: {
        beneficiaries: '150K+',
        centers: '50+',
        courses: '100+'
      },
      color: '#667eea'
    },
    {
      id: 'housing',
      title: 'Housing & Shelter',
      icon: '🏠',
      description: 'Providing safe and dignified housing solutions for families and individuals in need.',
      image: gallerypic2,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      programs: [
        { name: 'Home Construction', count: '5K+' },
        { name: 'Temporary Shelters', count: '15+' },
        { name: 'Orphan Care Centers', count: '10+' },
        { name: 'Rehabilitation Centers', count: '8+' }
      ],
      stats: {
        beneficiaries: '25K+',
        homes: '5K+',
        centers: '15+'
      },
      color: '#f093fb'
    },
    {
      id: 'employment',
      title: 'Employment Assistance',
      icon: '💼',
      description: 'Creating opportunities for sustainable livelihoods and economic empowerment.',
      image: gallerypic3,
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      programs: [
        { name: 'Job Placement Services', count: '30K+' },
        { name: 'Career Training Programs', count: '50+' },
        { name: 'Entrepreneurship Support', count: '2K+' },
        { name: 'Microfinance Solutions', count: '5K+' }
      ],
      stats: {
        beneficiaries: '75K+',
        placements: '30K+',
        businesses: '2K+'
      },
      color: '#4facfe'
    },
    {
      id: 'health-food',
      title: 'Food & Health Aid',
      icon: '🏥',
      description: 'Ensuring basic healthcare and nutrition for communities in need.',
      image: gallerypic4,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      programs: [
        { name: 'Daily Meal Programs', count: '1M+' },
        { name: 'Medical Camps', count: '500+' },
        { name: 'Emergency Relief', count: '200+' },
        { name: 'Mobile Health Units', count: '25+' }
      ],
      stats: {
        beneficiaries: '200K+',
        meals: '1M+',
        camps: '500+'
      },
      color: '#fa709a'
    }
  ];

  return (
    <section id="programs" className="programs">
      <div className="programs-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="programs-header">
          <h2 className="section-title">
            Transforming Lives Through
            <span className="title-highlight"> Comprehensive Programs</span>
          </h2>
          <p className="section-subtitle">
            Discover how our innovative welfare programs are creating lasting positive impact 
            across Pakistan and beyond, touching millions of lives every day.
          </p>
        </div>

        <div className="programs-grid">
          {programCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={`program-card ${activeCard === category.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(category.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ '--delay': `${index * 0.1}s`, '--color': category.color }}
            >
              <div className="card-background">
                <img src={category.image} alt={category.title} className="card-image" />
                <div className="card-overlay" style={{ background: category.gradient }}></div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon">
                    <span className="icon-emoji">{category.icon}</span>
                  </div>
                  <div className="card-title-section">
                    <h3 className="card-title">{category.title}</h3>
                    <div className="title-underline"></div>
                  </div>
                </div>

                <p className="card-description">{category.description}</p>

                <div className="card-stats">
                  {Object.entries(category.stats).map(([key, value], idx) => (
                    <div key={key} className="stat-item">
                      <div className="stat-number">{value}</div>
                      <div className="stat-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                    </div>
                  ))}
                </div>



                <div className="card-action">
                  <button className="action-btn">
                    <span className="btn-text">Explore Program</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        <div className="programs-cta">
          <div className="cta-content">
            <div className="cta-icon">🤝</div>
            <h3>Ready to Make a Difference?</h3>
            <p>Join thousands of volunteers and donors in our mission to transform lives and build stronger communities across Pakistan.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <span className="btn-icon">❤️</span>
                <span>Donate Now</span>
              </button>
              <button className="cta-btn secondary">
                <span className="btn-icon">🙋‍♂️</span>
                <span>Volunteer With Us</span>
              </button>
            </div>
          </div>
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">500K+</div>
              <div className="cta-stat-label">Lives Impacted</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">25+</div>
              <div className="cta-stat-label">Years of Service</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">100+</div>
              <div className="cta-stat-label">Programs Running</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;