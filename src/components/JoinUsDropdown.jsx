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
      // Prepare email data
      const emailData = {
        to: 'sahirullah313@gmail.com',
        subject: 'New Join Us Application - Saylani Welfare',
        html: `
          <h2>New Join Us Application</h2>
          <p><strong>Full Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>Motivation:</strong> ${formData.motivation || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `
      };
      
      // Try to send email using Formspree (free email service)
      const formspreeResponse = await fetch('https://formspree.io/f/xpwzgvqr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'sahirullah313@gmail.com',
          subject: 'New Join Us Application - Saylani Welfare',
          message: `
            New Join Us Application Received:
            
            Full Name: ${formData.fullName}
            Email: ${formData.email}
            Phone: ${formData.phone}
            City: ${formData.city}
            Motivation: ${formData.motivation || 'Not provided'}
            Submitted at: ${new Date().toLocaleString()}
          `,
          _replyto: formData.email,
          _subject: 'New Join Us Application - Saylani Welfare'
        })
      });

      if (!formspreeResponse.ok) {
        throw new Error('Formspree failed');
      }
      
      console.log('Email sent successfully via Formspree!');
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
      
      // Fallback: Use mailto to open email client
      const mailtoLink = `mailto:sahirullah313@gmail.com?subject=New Join Us Application - Saylani Welfare&body=Full Name: ${encodeURIComponent(formData.fullName)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0ACity: ${encodeURIComponent(formData.city)}%0D%0AMotivation: ${encodeURIComponent(formData.motivation || 'Not provided')}%0D%0ASubmitted at: ${encodeURIComponent(new Date().toLocaleString())}`;
      
      window.open(mailtoLink);
      console.log('Fallback: Email client opened with form data');
      
      // Show success message even in fallback case
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