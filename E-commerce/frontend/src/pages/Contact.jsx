import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('✨ Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactCards = [
    {
      id: 1,
      icon: '🏢',
      title: 'Visit Our Store',
      info: '123 Tech Plaza, Electronic City',
      subInfo: 'Mumbai, Maharashtra 400001',
      color: '#ff6b6b',
      bgGradient: 'linear-gradient(135deg, #ff6b6b, #ee5a52)'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Call Us Now',
      info: '+91 98765 43210',
      subInfo: 'Mon-Sat: 9AM-8PM',
      color: '#4ecdc4',
      bgGradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)'
    },
    {
      id: 3,
      icon: '📧',
      title: 'Email Support',
      info: 'support@techshop.com',
      subInfo: 'Response within 2 hours',
      color: '#45b7d1',
      bgGradient: 'linear-gradient(135deg, #45b7d1, #2196f3)'
    },
    {
      id: 4,
      icon: '💬',
      title: 'Live Chat',
      info: 'Chat with our experts',
      subInfo: 'Available 24/7',
      color: '#f7b731',
      bgGradient: 'linear-gradient(135deg, #f7b731, #f39c12)'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '4rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '3rem 2rem',
        borderRadius: '20px',
        margin: '0 2rem 4rem 2rem',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h1 style={{ 
          background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
        }}>Let's Connect! 🚀</h1>
        <p style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontSize: '1.3rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello.</p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Contact Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {contactCards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: hoveredCard === card.id ? card.bgGradient : 'rgba(255,255,255,0.95)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: hoveredCard === card.id 
                  ? `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${card.color}40`
                  : '0 10px 30px rgba(0,0,0,0.1)',
                transform: hoveredCard === card.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                border: `2px solid ${hoveredCard === card.id ? 'transparent' : card.color}20`
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                transform: hoveredCard === card.id ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>{card.icon}</div>
              <h3 style={{ 
                color: hoveredCard === card.id ? 'white' : card.color,
                marginBottom: '0.5rem',
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>{card.title}</h3>
              <p style={{ 
                color: hoveredCard === card.id ? 'rgba(255,255,255,0.9)' : '#333',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>{card.info}</p>
              <p style={{ 
                color: hoveredCard === card.id ? 'rgba(255,255,255,0.7)' : '#666',
                fontSize: '0.9rem'
              }}>{card.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div style={{ 
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          padding: '3rem',
          borderRadius: '25px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2.2rem',
              marginBottom: '0.5rem'
            }}>Send us a Message ✨</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>We'll respond faster than you can say "TechShop"!</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1.2rem 1rem 1.2rem 3rem',
                    border: '2px solid #e1e8ed',
                    borderRadius: '15px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
                />
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>👤</span>
              </div>
              
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '1.2rem 1rem 1.2rem 3rem',
                    border: '2px solid #e1e8ed',
                    borderRadius: '15px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
                />
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>📧</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '1.2rem 1rem 1.2rem 3rem',
                  border: '2px solid #e1e8ed',
                  borderRadius: '15px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255,255,255,0.8)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>📝</span>
            </div>

            <div style={{ position: 'relative' }}>
              <textarea
                name="message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '1.2rem 1rem 1.2rem 3rem',
                  border: '2px solid #e1e8ed',
                  borderRadius: '15px',
                  fontSize: '1rem',
                  resize: 'vertical',
                  minHeight: '120px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(255,255,255,0.8)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#e1e8ed'}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '1.2rem', fontSize: '1.2rem' }}>💬</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: isSubmitting 
                  ? 'linear-gradient(45deg, #ccc, #999)' 
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                padding: '1.2rem 2rem',
                borderRadius: '15px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                transform: isSubmitting ? 'scale(0.98)' : 'scale(1)',
                boxShadow: isSubmitting 
                  ? 'none' 
                  : '0 10px 25px rgba(102, 126, 234, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message 🚀
                </>
              )}
            </button>
          </form>
        </div>

        {/* Fun Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '1rem' }}>
            🌟 Follow us on social media for the latest tech updates!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {['🐦', '📷', '📺', '🔗'].map((icon, index) => (
              <div key={index} style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2) rotate(10deg)';
                e.target.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.background = 'rgba(255,255,255,0.2)';
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Contact;
