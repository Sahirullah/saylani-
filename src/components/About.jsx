import React from 'react';
import './About.css';
import ceoImage from '../assets/CEO.jfif';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Introduction Section */}
        <div className="about-intro">
          <h2 className="section-title">About Saylani Foundation</h2>
          <p className="intro-text">
            Saylani Welfare International Trust stands as a beacon of hope and compassion, 
            dedicated to transforming lives and building stronger communities across Pakistan 
            and beyond. Founded with an unwavering commitment to serve humanity, we have 
            emerged as one of the largest welfare organizations in the region.
          </p>
        </div>

        {/* Mission, Vision & Values */}
        <div className="mvv-section">
          <div className="mvv-grid">
            <div className="mvv-card mission">
              <div className="mvv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To alleviate poverty and suffering by providing comprehensive welfare services, 
                quality education, healthcare, and sustainable livelihood opportunities to 
                underprivileged communities, fostering dignity and self-reliance.
              </p>
            </div>
            <div className="mvv-card vision">
              <div className="mvv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To create a world where every individual has access to basic necessities, 
                quality education, and opportunities for growth, building a society free 
                from poverty, hunger, and inequality.
              </p>
            </div>
            <div className="mvv-card values">
              <div className="mvv-icon">💝</div>
              <h3>Core Values</h3>
              <ul>
                <li>Compassion & Empathy</li>
                <li>Transparency & Accountability</li>
                <li>Excellence in Service</li>
                <li>Dignity & Respect</li>
                <li>Innovation & Sustainability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="founder-message">
          <div className="founder-content">
            <div className="founder-image">
              <img src={ceoImage} alt="Maulana Bashir Farooq Qadri" />
            </div>
            <div className="founder-text">
              <h3>Message from Our Founder</h3>
              <blockquote>
                "When I started Saylani Welfare, my vision was simple yet profound - to serve 
                humanity without any discrimination of caste, creed, or religion. Today, as I 
                witness the transformation of countless lives, I am reminded that true success 
                lies not in what we achieve for ourselves, but in what we do for others. 
                Every meal served, every child educated, and every life touched brings us 
                closer to our dream of a compassionate society."
              </blockquote>
              <div className="founder-signature">
                <strong>Maulana Bashir Farooq Qadri</strong>
                <span>Founder & Chairman, Saylani Welfare International Trust</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-section">
          <h3 className="timeline-title">Our Journey Through Time</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1999</div>
              <div className="timeline-content">
                <h4>Foundation Established</h4>
                <p>Saylani Welfare International Trust was founded with a mission to serve the underprivileged.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2002</div>
              <div className="timeline-content">
                <h4>First Educational Initiative</h4>
                <p>Launched our first free education program, providing quality learning opportunities.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h4>Healthcare Services Begin</h4>
                <p>Established free medical facilities and mobile health units for remote areas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h4>Food Security Program</h4>
                <p>Started daily meal distribution, serving thousands of meals to the hungry.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h4>Technical Education Launch</h4>
                <p>Introduced vocational training and skill development programs for employment.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>International Expansion</h4>
                <p>Extended services to other countries, becoming a truly international organization.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>Digital Innovation</h4>
                <p>Launched online education platforms and digital welfare services during pandemic.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>500K+ Lives Impacted</h4>
                <p>Reached the milestone of transforming over half a million lives across multiple countries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;