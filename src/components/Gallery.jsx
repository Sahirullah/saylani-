import React, { useState } from 'react';
import './Gallery.css';

// Import local gallery images
import gallerypic2 from '../assets/gallerypic2.jpg';
import gallerypic3 from '../assets/gallerypic3.jpg';
import gallerypic4 from '../assets/gallerypic4.webp';
import gallerypic5 from '../assets/gallerypic5.jpg';
import gallarypic from '../assets/gellary pic.jpg';
import gallarypic1 from '../assets/Gellary pic1.jpg';
import successStory1 from '../assets/Successes story 1.png';
import successStory2 from '../assets/sucesses story2.jpg';
import ceoImage from '../assets/CEO.jfif';
import hopeImage from '../assets/BringsHopeToPeople.ab6a7d3a.jpg';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      src: gallerypic2,
      title: 'Annual Fundraising Gala 2024',
      description: 'Our biggest fundraising event of the year with over 500 attendees',
      date: '2024-12-01'
    },
    {
      id: 2,
      type: 'image',
      category: 'projects',
      src: gallerypic3,
      title: 'New School Opening in Karachi',
      description: 'Opening ceremony of our 50th free school serving 1000+ students',
      date: '2024-11-15'
    },
    {
      id: 3,
      type: 'image',
      category: 'beneficiaries',
      src: gallerypic4,
      title: 'IT Training Graduation Ceremony',
      description: 'Proud graduates from our 6-month IT certification program',
      date: '2024-11-10'
    },
    {
      id: 4,
      type: 'image',
      category: 'projects',
      src: gallerypic5,
      title: 'Free Medical Camp in Rural Sindh',
      description: 'Setting up mobile medical facilities in underserved communities',
      date: '2024-10-28'
    },
    {
      id: 5,
      type: 'image',
      category: 'beneficiaries',
      src: successStory1,
      title: 'Success Story - Educational Achievement',
      description: 'From beneficiary to successful professional - inspiring journey',
      date: '2024-10-20'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      src: gallarypic,
      title: 'Ramadan Iftar Distribution',
      description: 'Serving 10,000+ iftar meals daily during Ramadan 2024',
      date: '2024-04-15'
    },
    {
      id: 7,
      type: 'image',
      category: 'projects',
      src: gallarypic1,
      title: 'Housing Project Completion',
      description: '50 new homes completed for flood-affected families',
      date: '2024-09-30'
    },
    {
      id: 8,
      type: 'image',
      category: 'events',
      src: hopeImage,
      title: 'Bringing Hope to People',
      description: 'Community outreach program bringing hope and support',
      date: '2024-09-15'
    },
    {
      id: 9,
      type: 'image',
      category: 'beneficiaries',
      src: successStory2,
      title: 'Children in Our Schools',
      description: 'Happy faces of children getting quality education in our schools',
      date: '2024-08-25'
    },
    {
      id: 10,
      type: 'image',
      category: 'leadership',
      src: ceoImage,
      title: 'Leadership & Vision',
      description: 'Our leadership team guiding the mission forward',
      date: '2024-08-10'
    }
  ];



  const filteredItems = galleryItems;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Photo & Video Gallery</h2>
          <p className="section-subtitle">
            Explore our visual journey through events, projects, and the lives we've touched. 
            See the impact of your support in action.
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.type}`}
              onClick={() => setSelectedMedia(item)}
            >
              <div className="media-container">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/4a7c59/ffffff?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                ) : (
                  <>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="video-thumbnail"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x400/6ba16f/ffffff?text=${encodeURIComponent(item.title)}`;
                      }}
                    />
                    <div className="play-overlay">
                      <div className="play-button">
                        <span className="play-icon">▶️</span>
                      </div>
                    </div>
                  </>
                )}
                
                <div className="media-overlay">
                  <div className="media-info">
                    <h4 className="media-title">{item.title}</h4>
                    <p className="media-description">{item.description}</p>
                    <span className="media-date">{formatDate(item.date)}</span>
                  </div>
                </div>
              </div>
              
              <div className="item-badge">
                <span className={`badge ${item.category}`}>
                  {item.category === 'events' ? '🎉' : item.category === 'projects' ? '🏗️' : '👥'} {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>



        {/* Media Modal */}
        {selectedMedia && (
          <div className="media-modal" onClick={() => setSelectedMedia(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setSelectedMedia(null)}>×</button>
              
              <div className="modal-media">
                {selectedMedia.type === 'image' ? (
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/4a7c59/ffffff?text=${encodeURIComponent(selectedMedia.title)}`;
                    }}
                  />
                ) : (
                  <video controls autoPlay>
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              <div className="modal-info">
                <div className="modal-header">
                  <h3 className="modal-title">{selectedMedia.title}</h3>
                  <span className="modal-date">{formatDate(selectedMedia.date)}</span>
                </div>
                <p className="modal-description">{selectedMedia.description}</p>

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;