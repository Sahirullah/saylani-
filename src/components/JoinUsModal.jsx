import React, { useState } from 'react';
import './JoinUsModal.css';

const JoinUsModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    interests: [],
    motivation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(item => item !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Join Us Form Data:', formData);
    alert('🎉 Thank you for joining our mission! We will contact you soon.');
    onClose();
    setCurrentStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      interests: [],
      motivation: ''
    });
  };

  if (!isOpen) return null;

  const interests = [
    { id: 'education', label: 'Education Support', icon: '📚' },
    { id: 'healthcare', label: 'Healthcare Services', icon: '🏥' },
    { id: 'food', label: 'Food Distribution', icon: '🍽️' },
    { id: 'shelter', label: 'Housing & Shelter', icon: '🏠' },
    { id: 'employment', label: 'Job Training', icon: '💼' },
    { id: 'emergency', label: 'Emergency Relief', icon: '🚨' },
    { id: 'water', label: 'Clean Water', icon: '💧' },
    { id: 'women', label: 'Women Empowerment', icon: '👩‍💼' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-content">
            <h2>🤝 Join Our Mission</h2>
            <p>Be part of something bigger</p>
          </div>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="progress-bar">
          <div className="progress-steps">
            {[1, 2, 3].map((step) => (
              <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
                <div className="step-number">{step}</div>
                <div className="step-label">
                  {step === 1 ? 'Personal Info' : step === 2 ? 'Interests' : 'Motivation'}
                </div>
              </div>
            ))}
          </div>
          <div className="progress-line">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="join-form">
            {currentStep === 1 && (
              <div className="step-content">
                <div className="step-header">
                  <h3>👋 Tell us about yourself</h3>
                  <p>We'd love to get to know you better</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Which city are you from?"
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="step-content">
                <div className="step-header">
                  <h3>💝 What interests you?</h3>
                  <p>Select the areas where you'd like to make a difference</p>
                </div>
                
                <div className="interests-grid">
                  {interests.map((interest) => (
                    <div
                      key={interest.id}
                      className={`interest-card ${formData.interests.includes(interest.id) ? 'selected' : ''}`}
                      onClick={() => handleInterestChange(interest.id)}
                    >
                      <div className="interest-icon">{interest.icon}</div>
                      <div className="interest-label">{interest.label}</div>
                      <div className="interest-check">
                        {formData.interests.includes(interest.id) ? '✓' : '+'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="step-content">
                <div className="step-header">
                  <h3>💭 Share your story</h3>
                  <p>What motivates you to join our mission?</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor="motivation">Your Motivation</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us what drives you to make a difference in people's lives..."
                    rows="6"
                    required
                  />
                </div>

                <div className="summary-card">
                  <h4>📋 Summary</h4>
                  <div className="summary-item">
                    <strong>Name:</strong> {formData.fullName}
                  </div>
                  <div className="summary-item">
                    <strong>Email:</strong> {formData.email}
                  </div>
                  <div className="summary-item">
                    <strong>City:</strong> {formData.city}
                  </div>
                  <div className="summary-item">
                    <strong>Interests:</strong> {formData.interests.length} selected
                  </div>
                </div>
              </div>
            )}

            <div className="form-actions">
              {currentStep > 1 && (
                <button type="button" className="btn-prev" onClick={handlePrev}>
                  ← Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button 
                  type="button" 
                  className="btn-next" 
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && (!formData.fullName || !formData.email || !formData.phone || !formData.city)) ||
                    (currentStep === 2 && formData.interests.length === 0)
                  }
                >
                  Next →
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  🚀 Join Our Mission
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsModal;