import React, { useState } from 'react';
import './NewsEvents.css';

// Import local images
import healthImage from '../assets/hhksa.jpg';
import itCenterImage from '../assets/gallerypic3.jpg';
import winterReliefImage from '../assets/gallerypic2.jpg';
import bbcImage from '../assets/gallerypic4.webp';
import galaImage from '../assets/gallerypic5.jpg';
import techPartnershipImage from '../assets/pic1.webp';
import cnnImage from '../assets/images.jfif';
import skillsExpoImage from '../assets/CEO.jfif';

const NewsEvents = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsData = [
    {
      id: 1,
      category: 'project-update',
      title: 'New IT Training Center Opens in Lahore',
      excerpt: 'Saylani Welfare inaugurates state-of-the-art IT training facility with capacity for 500 students, featuring modern computer labs and industry-standard equipment.',
      content: 'In a significant milestone for digital education in Pakistan, Saylani Welfare International Trust has opened its newest IT training center in Lahore. The facility spans 15,000 square feet and includes 10 modern computer labs equipped with the latest hardware and software. The center will offer courses in web development, mobile app development, artificial intelligence, and digital marketing. This expansion is part of our commitment to bridging the digital divide and preparing youth for the modern economy.',
      image: itCenterImage,
      date: '2024-12-08',
      author: 'Saylani Media Team',
      readTime: '3 min read',
      tags: ['Education', 'Technology', 'Lahore']
    },
    {
      id: 2,
      category: 'announcement',
      title: 'Winter Relief Campaign 2024 Launched',
      excerpt: 'Comprehensive winter aid program begins distribution of warm clothing, blankets, and heating supplies to 50,000 families across Pakistan.',
      content: 'As temperatures drop across Pakistan, Saylani Welfare has launched its annual Winter Relief Campaign 2024. This year\'s campaign aims to reach 50,000 families in need, providing warm clothing, blankets, heating supplies, and nutritious food packages. The campaign will run through March 2025, with distribution centers established in major cities and remote areas. Volunteers and donors can participate through our mobile app or visit local centers.',
      image: winterReliefImage,
      date: '2024-12-05',
      author: 'Relief Operations Team',
      readTime: '4 min read',
      tags: ['Relief', 'Winter Campaign', 'Community Support']
    },
    {
      id: 3,
      category: 'media-coverage',
      title: 'BBC Features Saylani\'s Education Impact',
      excerpt: 'International media highlights our free education programs and their transformative effect on Pakistani communities in special documentary.',
      content: 'BBC World Service has featured Saylani Welfare\'s education initiatives in a comprehensive documentary titled "Education for All: Pakistan\'s Success Story." The 30-minute program showcases how our free schools and vocational training centers have transformed lives across the country. The documentary includes interviews with students, teachers, and families who have benefited from our programs, highlighting the organization\'s impact on reducing poverty through education.',
      image: bbcImage,
      date: '2024-12-03',
      author: 'Media Relations',
      readTime: '2 min read',
      tags: ['Media Coverage', 'Education', 'International Recognition']
    },
    {
      id: 4,
      category: 'event',
      title: 'Annual Fundraising Gala 2024',
      excerpt: 'Join us for an evening of inspiration and giving at our annual fundraising gala featuring keynote speakers and success story presentations.',
      content: 'Save the date for Saylani Welfare\'s Annual Fundraising Gala 2024, scheduled for December 20th at the Karachi Expo Center. This year\'s theme is "Building Tomorrow Together," featuring keynote speeches from prominent philanthropists, success story presentations from our beneficiaries, and cultural performances. The event aims to raise funds for our upcoming projects including new schools, healthcare facilities, and job training centers. Tickets are available online with various sponsorship packages.',
      image: galaImage,
      date: '2024-12-01',
      author: 'Events Team',
      readTime: '3 min read',
      tags: ['Fundraising', 'Event', 'Community']
    },
    {
      id: 5,
      category: 'project-update',
      title: 'Mobile Health Units Reach Remote Areas',
      excerpt: 'Fleet of 10 new mobile health units begins operations in underserved rural communities, providing free medical services and health education.',
      content: 'Saylani Welfare has deployed 10 new mobile health units to serve remote and underserved communities across Pakistan. Each unit is equipped with modern medical equipment, staffed by qualified doctors and nurses, and capable of providing basic healthcare services, vaccinations, and health screenings. The mobile units will follow scheduled routes, visiting villages and settlements that lack access to healthcare facilities. This initiative is expected to serve over 100,000 people annually.',
      image: healthImage,
      date: '2024-11-28',
      author: 'Healthcare Division',
      readTime: '4 min read',
      tags: ['Healthcare', 'Mobile Services', 'Rural Development']
    },
    {
      id: 6,
      category: 'announcement',
      title: 'Partnership with Tech Giants for Digital Skills',
      excerpt: 'Strategic partnerships with Microsoft, Google, and Amazon to provide certified digital training programs and job placement opportunities.',
      content: 'Saylani Welfare announces groundbreaking partnerships with Microsoft, Google, and Amazon to enhance our digital skills training programs. These collaborations will provide students with access to industry-certified courses, cloud computing resources, and direct job placement opportunities. The partnerships include scholarship programs, mentorship initiatives, and internship placements at leading tech companies. This initiative aligns with Pakistan\'s digital transformation goals and our mission to create employment opportunities.',
      image: techPartnershipImage,
      date: '2024-11-25',
      author: 'Strategic Partnerships',
      readTime: '5 min read',
      tags: ['Technology', 'Partnerships', 'Employment']
    },
    {
      id: 7,
      category: 'media-coverage',
      title: 'CNN Highlights Food Security Programs',
      excerpt: 'International news network showcases Saylani\'s innovative food distribution system and its impact on addressing hunger in Pakistan.',
      content: 'CNN International has featured Saylani Welfare\'s food security programs in a special report on innovative approaches to addressing hunger. The segment highlights our daily meal distribution system, food banks, and emergency relief operations. The report emphasizes how technology integration has improved efficiency and transparency in food distribution, reaching over 200,000 people daily. The coverage has brought international attention to Pakistan\'s grassroots welfare initiatives.',
      image: cnnImage,
      date: '2024-11-22',
      author: 'Media Relations',
      readTime: '3 min read',
      tags: ['Media Coverage', 'Food Security', 'Innovation']
    },
    {
      id: 8,
      category: 'event',
      title: 'Skills Development Expo 2024',
      excerpt: 'Three-day exhibition showcasing vocational training programs, job opportunities, and success stories from our skill development initiatives.',
      content: 'The Skills Development Expo 2024 will be held from December 15-17 at the Lahore Convention Center. This three-day event will showcase our various vocational training programs, provide job placement opportunities, and feature success stories from our graduates. Visitors can explore different career paths, meet potential employers, and register for training programs. The expo will also include workshops, career counseling sessions, and networking opportunities for job seekers and employers.',
      image: skillsExpoImage,
      date: '2024-11-20',
      author: 'Skills Development Team',
      readTime: '4 min read',
      tags: ['Skills Development', 'Employment', 'Expo']
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'project-update', name: 'Project Updates', icon: '🚀' },
    { id: 'announcement', name: 'Announcements', icon: '📢' },
    { id: 'event', name: 'Events', icon: '📅' },
    { id: 'media-coverage', name: 'Media Coverage', icon: '📺' }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="news-events" className="news-events">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">News & Events</h2>
          <p className="section-subtitle">
            Stay updated with our latest projects, announcements, and media coverage. 
            Discover how we're making a difference in communities across Pakistan.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <div className="featured-article">
            <div className="featured-content">
              <div className="featured-image">
                <img src={filteredNews[0].image} alt={filteredNews[0].title} />
                <div className="featured-overlay">
                  <span className="featured-badge">Featured</span>
                </div>
              </div>
              <div className="featured-info">
                <div className="article-meta">
                  <span className="article-category">{filteredNews[0].category.replace('-', ' ')}</span>
                  <span className="article-date">{formatDate(filteredNews[0].date)}</span>
                </div>
                <h3 className="featured-title">{filteredNews[0].title}</h3>
                <p className="featured-excerpt">{filteredNews[0].excerpt}</p>
                <div className="article-footer">
                  <div className="author-info">
                    <span className="author">By {filteredNews[0].author}</span>
                    <span className="read-time">{filteredNews[0].readTime}</span>
                  </div>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedArticle(filteredNews[0])}
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="news-grid">
          {filteredNews.slice(1).map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-image">
                <img src={article.image} alt={article.title} />
                <div className="news-overlay">
                  <button 
                    className="overlay-btn"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="news-content">
                <div className="article-meta">
                  <span className="article-category">{article.category.replace('-', ' ')}</span>
                  <span className="article-date">{formatDate(article.date)}</span>
                </div>
                <h4 className="news-title">{article.title}</h4>
                <p className="news-excerpt">{article.excerpt}</p>
                <div className="news-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="article-footer">
                  <span className="author">By {article.author}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Informed</h3>
            <p>Subscribe to our newsletter for the latest updates on our programs and impact.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="article-modal" onClick={() => setSelectedArticle(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedArticle(null)}>×</button>
              
              <div className="modal-header">
                <img src={selectedArticle.image} alt={selectedArticle.title} />
                <div className="modal-meta">
                  <span className="modal-category">{selectedArticle.category.replace('-', ' ')}</span>
                  <h2 className="modal-title">{selectedArticle.title}</h2>
                  <div className="modal-info">
                    <span className="modal-author">By {selectedArticle.author}</span>
                    <span className="modal-date">{formatDate(selectedArticle.date)}</span>
                    <span className="modal-read-time">{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-excerpt">{selectedArticle.excerpt}</p>
                <div className="modal-text">{selectedArticle.content}</div>
                <div className="modal-tags">
                  {selectedArticle.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <div className="share-buttons">
                  <span>Share this article:</span>
                  <button className="share-btn facebook">📘 Facebook</button>
                  <button className="share-btn twitter">🐦 Twitter</button>
                  <button className="share-btn linkedin">💼 LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEvents;