import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationType, setDonationType] = useState('general');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isRecurring, setIsRecurring] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Pakistan'
  });

  const donationTypes = [
    {
      id: 'general',
      name: 'General Fund',
      description: 'Support all our programs and initiatives',
      icon: '🤝',
      color: '#4a7c59'
    },
    {
      id: 'education',
      name: 'Education Support',
      description: 'Fund schools, scholarships, and skill training',
      icon: '🎓',
      color: '#2196F3'
    },
    {
      id: 'healthcare',
      name: 'Healthcare Services',
      description: 'Support medical camps and health facilities',
      icon: '🏥',
      color: '#f44336'
    },
    {
      id: 'food',
      name: 'Food Security',
      description: 'Provide meals and nutrition programs',
      icon: '🍽️',
      color: '#ff9800'
    },
    {
      id: 'shelter',
      name: 'Housing & Shelter',
      description: 'Build homes and provide temporary shelter',
      icon: '🏠',
      color: '#9c27b0'
    },
    {
      id: 'emergency',
      name: 'Emergency Relief',
      description: 'Disaster response and urgent aid',
      icon: '🆘',
      color: '#e91e63'
    }
  ];

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    
    const donationData = {
      type: donationType,
      amount: finalAmount,
      recurring: isRecurring,
      paymentMethod,
      donorInfo: formData
    };
    
    console.log('Donation submitted:', donationData);
    // Here you would integrate with payment gateway
  };

  return (
    <section id="donate" className="donate">
      <div className="container">
        <div className="donate-header">
          <h1 className="page-title">Make a Donation</h1>
          <p className="page-subtitle">
            Your generosity helps us transform lives and build stronger communities. 
            Every donation, no matter the size, makes a meaningful difference.
          </p>
        </div>

        <div className="donate-content">
          {/* Donation Form */}
          <div className="donation-form-section">
            <form className="donation-form" onSubmit={handleSubmit}>
              {/* Donation Type Selection */}
              <div className="form-section">
                <h3 className="section-title">Choose Your Cause</h3>
                <div className="donation-types">
                  {donationTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`donation-type ${donationType === type.id ? 'selected' : ''}`}
                      onClick={() => setDonationType(type.id)}
                      style={{ '--type-color': type.color }}
                    >
                      <div className="type-icon">{type.icon}</div>
                      <div className="type-content">
                        <h4 className="type-name">{type.name}</h4>
                        <p className="type-description">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="form-section">
                <h3 className="section-title">Select Amount (PKR)</h3>
                <div className="amount-selection">
                  <div className="predefined-amounts">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${donationAmount === amount.toString() ? 'selected' : ''}`}
                        onClick={() => {
                          setDonationAmount(amount.toString());
                          setCustomAmount('');
                        }}
                      >
                        ₨{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-amount">
                    <button
                      type="button"
                      className={`amount-btn custom ${donationAmount === 'custom' ? 'selected' : ''}`}
                      onClick={() => setDonationAmount('custom')}
                    >
                      Custom Amount
                    </button>
                    {donationAmount === 'custom' && (
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="custom-input"
                        min="100"
                      />
                    )}
                  </div>
                </div>

                {/* Recurring Donation */}
                <div className="recurring-option">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={(e) => setIsRecurring(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Make this a monthly recurring donation
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-section">
                <h3 className="section-title">Payment Method</h3>
                <div className="payment-methods">
                  <div
                    className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="method-icon">💳</div>
                    <div className="method-info">
                      <h4>Credit/Debit Card</h4>
                      <p>Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                  
                  <div
                    className={`payment-method ${paymentMethod === 'bank' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('bank')}
                  >
                    <div className="method-icon">🏦</div>
                    <div className="method-info">
                      <h4>Bank Transfer</h4>
                      <p>Direct bank transfer</p>
                    </div>
                  </div>
                  
                  <div
                    className={`payment-method ${paymentMethod === 'mobile' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('mobile')}
                  >
                    <div className="method-icon">📱</div>
                    <div className="method-info">
                      <h4>Mobile Payment</h4>
                      <p>JazzCash, Easypaisa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="form-section">
                <h3 className="section-title">Your Information</h3>
                <div className="donor-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="Pakistan">Pakistan</option>
                        <option value="UAE">UAE</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="donate-btn">
                <span>Donate ₨{donationAmount === 'custom' ? customAmount || '0' : donationAmount || '0'}</span>
                <span className="btn-icon">❤️</span>
              </button>
            </form>
          </div>

          {/* Sidebar Information */}
          <div className="donation-sidebar">
            {/* Impact Summary */}
            <div className="sidebar-card impact-card">
              <h3>Your Impact</h3>
              <div className="impact-examples">
                <div className="impact-item">
                  <span className="impact-amount">₨500</span>
                  <span className="impact-description">Provides meals for 10 people</span>
                </div>
                <div className="impact-item">
                  <span className="impact-amount">₨2,500</span>
                  <span className="impact-description">Sponsors a student for one month</span>
                </div>
                <div className="impact-item">
                  <span className="impact-amount">₨10,000</span>
                  <span className="impact-description">Funds medical treatment for a family</span>
                </div>
              </div>
            </div>

            {/* Security Information */}
            <div className="sidebar-card security-card">
              <h3>Secure Donation</h3>
              <div className="security-features">
                <div className="security-item">
                  <span className="security-icon">🔒</span>
                  <span>SSL Encrypted</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">🛡️</span>
                  <span>PCI Compliant</span>
                </div>
                <div className="security-item">
                  <span className="security-icon">✅</span>
                  <span>Verified Organization</span>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="sidebar-card tax-card">
              <h3>Tax Benefits</h3>
              <p>Your donation is tax-deductible. You will receive a receipt for tax purposes.</p>
              <div className="tax-info">
                <span className="tax-label">Tax ID:</span>
                <span className="tax-value">NTN-1234567-8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="transparency-section">
          <h2 className="transparency-title">How Your Donations Are Used</h2>
          <p className="transparency-subtitle">
            We believe in complete transparency. Here's exactly how your contributions make a difference.
          </p>
          
          <div className="fund-allocation">
            <div className="allocation-chart">
              <div className="chart-item" style={{'--percentage': '70%', '--color': '#4a7c59'}}>
                <div className="chart-bar"></div>
                <div className="chart-label">
                  <span className="percentage">70%</span>
                  <span className="category">Direct Programs</span>
                </div>
              </div>
              
              <div className="chart-item" style={{'--percentage': '20%', '--color': '#2196F3'}}>
                <div className="chart-bar"></div>
                <div className="chart-label">
                  <span className="percentage">20%</span>
                  <span className="category">Operations</span>
                </div>
              </div>
              
              <div className="chart-item" style={{'--percentage': '10%', '--color': '#ff9800'}}>
                <div className="chart-bar"></div>
                <div className="chart-label">
                  <span className="percentage">10%</span>
                  <span className="category">Administration</span>
                </div>
              </div>
            </div>
            
            <div className="allocation-details">
              <div className="detail-item">
                <div className="detail-icon" style={{'background': '#4a7c59'}}>📊</div>
                <div className="detail-content">
                  <h4>Direct Programs (70%)</h4>
                  <p>Education, healthcare, food distribution, shelter, and emergency relief programs that directly benefit communities.</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon" style={{'background': '#2196F3'}}>⚙️</div>
                <div className="detail-content">
                  <h4>Operations (20%)</h4>
                  <p>Program management, monitoring, evaluation, and ensuring quality service delivery across all initiatives.</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon" style={{'background': '#ff9800'}}>🏢</div>
                <div className="detail-content">
                  <h4>Administration (10%)</h4>
                  <p>Essential administrative costs including governance, compliance, and organizational management.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Annual Report */}
          <div className="annual-report">
            <h3>Financial Transparency</h3>
            <p>Download our latest annual report to see detailed financial information and program outcomes.</p>
            <button className="report-btn">
              <span>Download Annual Report 2024</span>
              <span className="btn-icon">📄</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;