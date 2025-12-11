import React, { useState } from 'react';
import './SuccessStories.css';

// Import local images
import successStory1 from '../assets/Successes story 1.png';
import successStory2 from '../assets/sucesses story2.jpg';
import ceoImage from '../assets/CEO.jfif';
import studentImage from '../assets/USA student.webp';
import gallerypic2 from '../assets/gallerypic2.jpg';
import gallerypic3 from '../assets/gallerypic3.jpg';
import gallerypic4 from '../assets/gallerypic4.webp';
import gallerypic5 from '../assets/gallerypic5.jpg';

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [selectedStory, setSelectedStory] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      age: 24,
      program: 'IT Training Program',
      image: successStory1,
      color: '#4a7c59',
      story: 'Alhamdulillah, through Saylani\'s IT training program, I learned web development and now work as a software engineer. The free education changed my entire family\'s future and allowed me to support my community.',
      achievement: 'Software Engineer at Tech Company',
      location: 'Karachi, Pakistan',
      year: '2023'
    },
    {
      id: 2,
      name: 'Fatima Khan',
      age: 28,
      program: 'Entrepreneurship Support',
      image: successStory2,
      color: '#6ba16f',
      story: 'With Allah\'s blessing and Saylani\'s microfinance support, I started my own tailoring business. Now I employ 5 other women and support my family with dignity and independence.',
      achievement: 'Successful Business Owner',
      location: 'Lahore, Pakistan',
      year: '2022'
    },
    {
      id: 3,
      name: 'Muhammad Ali',
      age: 19,
      program: 'Education Scholarship',
      image: studentImage,
      color: '#2c5530',
      story: 'I was about to drop out of college due to financial constraints. By Allah\'s grace and Saylani\'s scholarship program, I completed my engineering degree. Now I\'m giving back to the ummah.',
      achievement: 'Engineering Graduate & Volunteer',
      location: 'Islamabad, Pakistan',
      year: '2024'
    },
    {
      id: 4,
      name: 'Aisha Bibi',
      age: 35,
      program: 'Healthcare Support',
      image: gallerypic2,
      color: '#8bc34a',
      story: 'When my son needed urgent medical treatment, Saylani\'s healthcare program was a blessing from Allah. The free medical camp in our village helped our entire community.',
      achievement: 'Healthy Family & Community Advocate',
      location: 'Rural Sindh, Pakistan',
      year: '2023'
    },
    {
      id: 5,
      name: 'Omar Sheikh',
      age: 22,
      program: 'Vocational Training',
      image: gallerypic3,
      color: '#66bb6a',
      story: 'The electrical training program at Saylani gave me halal skills to earn a living. Alhamdulillah, I now run my own business and have trained 3 apprentices from my neighborhood.',
      achievement: 'Certified Electrician & Trainer',
      location: 'Faisalabad, Pakistan',
      year: '2023'
    },
    {
      id: 6,
      name: 'Zainab Ahmed',
      age: 26,
      program: 'Women Empowerment',
      image: gallerypic4,
      color: '#81c784',
      story: 'Through Saylani\'s women empowerment program, I learned computer skills while maintaining my Islamic values. Today, I work as an administrative assistant and support my children\'s Islamic education.',
      achievement: 'Administrative Professional',
      location: 'Multan, Pakistan',
      year: '2024'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/gallery/education-classroom.jpg',
      title: 'Modern Classroom Facilities',
      description: 'State-of-the-art classrooms providing quality education'
    },
    {
      id: 2,
      type: 'video',
      src: '/gallery/success-story-video1.mp4',
      thumbnail: '/gallery/video-thumb1.jpg',
      title: 'Ahmed\'s Journey to Success',
      description: 'From unemployment to tech professional'
    },
    {
      id: 3,
      type: 'image',
      src: '/gallery/medical-camp.jpg',
      title: 'Free Medical Camp',
      description: 'Providing healthcare to underserved communities'
    },
    {
      id: 4,
      type: 'image',
      src: '/gallery/food-distribution.jpg',
      title: 'Daily Meal Program',
      description: 'Ensuring no one goes hungry'
    },
    {
      id: 5,
      type: 'video',
      src: '/gallery/success-story-video2.mp4',
      thumbnail: '/gallery/video-thumb2.jpg',
      title: 'Fatima\'s Business Success',
      description: 'From beneficiary to entrepreneur'
    },
    {
      id: 6,
      type: 'image',
      src: '/gallery/skill-training.jpg',
      title: 'Vocational Training Center',
      description: 'Hands-on skill development programs'
    },
    {
      id: 7,
      type: 'image',
      src: '/gallery/housing-project-completion.jpg',
      title: 'Housing Project Completion',
      description: 'New homes for deserving families'
    },
    {
      id: 8,
      type: 'video',
      src: '/gallery/success-story-video3.mp4',
      thumbnail: '/gallery/video-thumb3.jpg',
      title: 'Community Impact Story',
      description: 'Transforming entire neighborhoods'
    },
    {
      id: 9,
      type: 'image',
      src: '/gallery/children-learning.jpg',
      title: 'Children Learning Program',
      description: 'Nurturing young minds for a better future'
    },
    {
      id: 10,
      type: 'image',
      src: '/gallery/clean-water-project.jpg',
      title: 'Clean Water Initiative',
      description: 'Providing access to clean drinking water'
    },
    {
      id: 11,
      type: 'image',
      src: '/gallery/annual-gala-2024.jpg',
      title: 'Annual Gala 2024',
      description: 'Celebrating achievements and raising funds'
    },
    {
      id: 12,
      type: 'image',
      src: '/gallery/ramadan-iftar-2024.jpg',
      title: 'Ramadan Iftar Program',
      description: 'Community iftar during holy month'
    }
  ];

  const impactStats = [
    {
      category: 'Education',
      stats: [
        { label: 'Students Educated', value: '150,000+', icon: '🎓' },
        { label: 'Scholarships Awarded', value: '25,000+', icon: '📚' },
        { label: 'IT Professionals Trained', value: '15,000+', icon: '💻' },
        { label: 'Schools Established', value: '50+', icon: '🏫' }
      ]
    },
    {
      category: 'Healthcare',
      stats: [
        { label: 'Medical Treatments', value: '500,000+', icon: '🏥' },
        { label: 'Medical Camps Organized', value: '1,200+', icon: '⛑️' },
        { label: 'Lives Saved', value: '50,000+', icon: '❤️' },
        { label: 'Mobile Health Units', value: '25+', icon: '🚑' }
      ]
    },
    {
      category: 'Employment',
      stats: [
        { label: 'Job Placements', value: '75,000+', icon: '💼' },
        { label: 'Businesses Started', value: '5,000+', icon: '🏪' },
        { label: 'Entrepreneurs Trained', value: '12,000+', icon: '👨‍💼' },
        { label: 'Microloans Provided', value: '8,000+', icon: '💰' }
      ]
    },
    {
      category: 'Food & Shelter',
      stats: [
        { label: 'Meals Served Daily', value: '50,000+', icon: '🍽️' },
        { label: 'Homes Built', value: '3,000+', icon: '🏠' },
        { label: 'Families Housed', value: '15,000+', icon: '👨‍👩‍👧‍👦' },
        { label: 'Emergency Relief Operations', value: '200+', icon: '🆘' }
      ]
    }
  ];

  return (
    <section id="success-stories" className="success-stories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Success Stories & Impact</h2>
          <p className="section-subtitle">
            Real stories of transformation, hope, and positive change from the communities we serve.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="stories-nav">
          <button 
            className={`nav-tab ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <span className="tab-icon">💬</span>
            Testimonials
          </button>
          <button 
            className={`nav-tab ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <span className="tab-icon">📸</span>
            Gallery
          </button>
          <button 
            className={`nav-tab ${activeTab === 'impact' ? 'active' : ''}`}
            onClick={() => setActiveTab('impact')}
          >
            <span className="tab-icon">📊</span>
            Impact Stats
          </button>
        </div>

        {/* Testimonials Section */}
        {activeTab === 'testimonials' && (
          <div className="testimonials-section">
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="testimonial-card"
                  onClick={() => setSelectedStory(testimonial)}
                >
                  <div className="testimonial-image">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="testimonial-placeholder" 
                      style={{backgroundColor: testimonial.color, display: 'none'}}
                    >
                      <span className="placeholder-initials">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="testimonial-overlay">
                      <span className="read-more">Read Full Story</span>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-program">{testimonial.program}</p>
                    <p className="testimonial-preview">
                      {testimonial.story.substring(0, 120)}...
                    </p>
                    <div className="testimonial-meta">
                      <span className="location">{testimonial.location}</span>
                      <span className="year">{testimonial.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {activeTab === 'gallery' && (
          <div className="gallery-section">
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div key={item.id} className="gallery-item">
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.title} />
                  ) : (
                    <div className="video-container">
                      <img src={item.thumbnail} alt={item.title} className="video-thumbnail" />
                      <div className="play-button">▶️</div>
                    </div>
                  )}
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact Statistics Section */}
        {activeTab === 'impact' && (
          <div className="impact-section">
            {impactStats.map((category, index) => (
              <div key={index} className="impact-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="stats-grid">
                  {category.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="stat-card">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-number">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Story Modal */}
        {selectedStory && (
          <div className="story-modal" onClick={() => setSelectedStory(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedStory(null)}>×</button>
              <div className="modal-header">
                <div className="modal-image-container">
                  <img 
                    src={selectedStory.image} 
                    alt={selectedStory.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="modal-placeholder" 
                    style={{backgroundColor: selectedStory.color, display: 'none'}}
                  >
                    <span className="modal-initials">
                      {selectedStory.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="modal-info">
                  <h3>{selectedStory.name}</h3>
                  <p className="modal-program">{selectedStory.program}</p>
                  <p className="modal-achievement">{selectedStory.achievement}</p>
                  <div className="modal-meta">
                    <span>{selectedStory.location}</span> • <span>{selectedStory.year}</span>
                  </div>
                </div>
              </div>
              <div className="modal-story">
                <p>{selectedStory.story}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;