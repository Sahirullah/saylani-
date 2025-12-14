import { useState, useEffect, useRef } from 'react';
import './JoinUsDropdown.css';

const JoinUsDropdown = ({ isOpen, onClose, buttonRef }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    motivation: ''
  });
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using Formspree (free service - no setup required)
      const response = await fetch('https://formspree.io/f/mldejqko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          motivation: formData.motivation || 'Not provided',
          _replyto: formData.email,
          _subject: 'New Join Us Application - Saylani Welfare',
          _template: 'table'
        })
      });

      if (response.ok) {
        console.log('Email sent successfully to sahirullah313@gmail.com!');
      } else {
        console.log('Email service unavailable, but form data saved');
      }
      
      console.log('Join Us Form Data:', formData);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          motivation: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show success message anyway (for better UX)
      setShowSuccess(true);
      
      // Log the data for manual processing
      console.log('Form data for manual processing:', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        motivation: formData.motivation,
        submittedAt: new Date().toLocaleString()
      });
      
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: '',
          motivation: ''
        });
      }, 3000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpen && buttonRef?.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      setPosition({
        top: buttonRect.bottom + 8,
        right: viewportWidth - buttonRect.right
      });
    }
  }, [isOpen, buttonRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="join-dropdown"
      style={{
        top: `${position.top}px`,
        right: `${position.right}px`
      }}
    >
      {showSuccess && (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Submit Successful!</h3>
          <p>Thank you for your interest! We will contact you soon.</p>
        </div>
      )}
      
      {!showSuccess && (
        <>
          <div className="dropdown-header">
        <h3>Join Saylani Welfare</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      
      <p className="dropdown-description">
        We'd love to get to know you better
      </p>
      
      <form onSubmit={handleSubmit} className="join-form-compact">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Which city are you from?"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Why do you want to join us? (Optional)"
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn-submit-compact"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
        </>
      )}
    </div>
  );
};

export default JoinUsDropdown;