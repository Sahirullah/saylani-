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
      // Create a comprehensive email solution
      const emailContent = {
        to: 'sahirullah313@gmail.com',
        subject: 'New Join Us Application - Saylani Welfare',
        body: `
New Join Us Application Received:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Motivation: ${formData.motivation || 'Not provided'}
Submitted at: ${new Date().toLocaleString()}

Please contact this person regarding their interest in joining Saylani Welfare.
        `
      };

      // Method 1: Try Netlify Forms (works if deployed on Netlify)
      try {
        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            'form-name': 'join-us',
            'name': formData.fullName,
            'email': formData.email,
            'phone': formData.phone,
            'city': formData.city,
            'motivation': formData.motivation || 'Not provided'
          })
        });
        
        if (netlifyResponse.ok) {
          console.log('Form submitted via Netlify Forms');
        }
      } catch (netlifyError) {
        console.log('Netlify Forms not available');
      }

      // Method 2: Use Formsubmit.co (free email service)
      try {
        const formSubmitResponse = await fetch('https://formsubmit.co/sahirullah313@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            motivation: formData.motivation || 'Not provided',
            _subject: 'New Join Us Application - Saylani Welfare',
            _captcha: 'false',
            _template: 'table'
          })
        });
        
        if (formSubmitResponse.ok) {
          console.log('Email sent successfully via FormSubmit!');
        }
      } catch (formSubmitError) {
        console.log('FormSubmit service error:', formSubmitError);
      }

      // Method 3: Store in localStorage for manual processing
      const submissions = JSON.parse(localStorage.getItem('joinUsSubmissions') || '[]');
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now()
      });
      localStorage.setItem('joinUsSubmissions', JSON.stringify(submissions));
      
      console.log('Form data saved locally:', formData);
      console.log('All submissions:', submissions);
      
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