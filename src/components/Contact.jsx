import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us to learn more about our programs, volunteer opportunities, 
            or to make a donation. We're here to help and answer any questions you may have.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donation">Donation Information</option>
                  <option value="programs">Program Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="media">Media Inquiries</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon">📧</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>We're always here to help and would love to hear from you.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Head Office</h4>
                    <p>A-25, Bahadurabad Chowrangi,<br />Karachi, Pakistan<br />4th Floor (Training Attestation)</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Phone Numbers</h4>
                    <p>+92-21-34130786<br />+92-21-34130787</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email Addresses</h4>
                    <p>info@saylaniwelfare.com<br />contact@saylaniwelfare.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h4>Office Hours</h4>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM<br />Healthcare Services: 24/7<br />Training Admissions: Mon-Sat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-section">
              <h4>Find Us on Map</h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d67.0731!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDQnMjMuMiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saylani Welfare Location"
                ></iframe>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-section">
              <h4>Follow Us</h4>
              <p>Stay connected with us on social media for the latest updates.</p>
              <div className="social-links">
                <a href="https://facebook.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <span className="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a href="https://twitter.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a href="https://linkedin.com/company/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://youtube.com/saylaniwelfare" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                  <span className="social-icon">📺</span>
                  <span>YouTube</span>
                </a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <span className="social-icon">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;