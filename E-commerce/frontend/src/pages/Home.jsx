import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../CartContext';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { getCartItemsCount } = useCart();

  const heroSlides = [
    {
      title: "Welcome to TechShop 🚀",
      subtitle: "Discover the Future of Technology",
      description: "Premium electronics and cutting-edge gadgets at unbeatable prices",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "💻"
    },
    {
      title: "Latest Tech Arrivals ⚡",
      subtitle: "Stay Ahead of the Curve",
      description: "Explore our newest collection of smartphones, laptops, and accessories",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      emoji: "📱"
    },
    {
      title: "Exclusive Deals 🎯",
      subtitle: "Save Big on Top Brands",
      description: "Limited time offers on your favorite tech products",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      emoji: "💰"
    }
  ];

  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999",
      color: "#ff6b6b",
      bgGradient: "linear-gradient(135deg, #ff6b6b, #ee5a52)"
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% secure payment gateway",
      color: "#4ecdc4",
      bgGradient: "linear-gradient(135deg, #4ecdc4, #44a08d)"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round the clock customer support",
      color: "#45b7d1",
      bgGradient: "linear-gradient(135deg, #45b7d1, #2196f3)"
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      color: "#f7b731",
      bgGradient: "linear-gradient(135deg, #f7b731, #f39c12)"
    }
  ];

  const categories = [
    {
      name: "Electronics",
      description: "Latest gadgets and devices",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      color: "#667eea",
      count: "500+ Products"
    },
    {
      name: "Audio",
      description: "Premium sound experience",
      icon: "🎧",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      color: "#f093fb",
      count: "200+ Products"
    },
    {
      name: "Accessories",
      description: "Essential tech accessories",
      icon: "⌨️",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      color: "#4facfe",
      count: "300+ Products"
    },
    {
      name: "Storage",
      description: "Reliable storage solutions",
      icon: "💾",
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
      color: "#ff6b6b",
      count: "150+ Products"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
      {/* Hero Carousel Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: heroSlides[currentSlide].gradient,
        transition: 'all 1s ease-in-out'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          backdropFilter: 'blur(1px)'
        }} />
        
        <div style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 2,
          maxWidth: '800px',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '6rem',
            marginBottom: '1rem',
            animation: 'bounce 2s infinite'
          }}>
            {heroSlides[currentSlide].emoji}
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 1s ease-out'
          }}>
            {heroSlides[currentSlide].title}
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            marginBottom: '1rem',
            opacity: 0.9,
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            {heroSlides[currentSlide].subtitle}
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            marginBottom: '2rem',
            opacity: 0.8,
            lineHeight: 1.6,
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}>
            {heroSlides[currentSlide].description}
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            <Link
              to="/products"
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🛍️ Shop Now
            </Link>
            
            <Link
              to="/contact"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              💬 Contact Us
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 3
        }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { number: '10K+', label: 'Happy Customers', icon: '😊' },
            { number: '1000+', label: 'Products', icon: '📦' },
            { number: '50+', label: 'Brands', icon: '🏆' },
            { number: '24/7', label: 'Support', icon: '🛟' }
          ].map((stat, index) => (
            <div key={index} style={{
              color: 'white',
              animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.number}</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>Why Choose TechShop? ✨</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>Experience the difference with our premium services</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                background: hoveredFeature === index ? feature.bgGradient : 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: `2px solid ${hoveredFeature === index ? 'transparent' : 'rgba(255,255,255,0.2)'}`,
                transform: hoveredFeature === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                boxShadow: hoveredFeature === index ? `0 20px 40px ${feature.color}40` : '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                transform: hoveredFeature === index ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>{feature.icon}</div>
              <h3 style={{
                color: hoveredFeature === index ? 'white' : feature.color,
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>{feature.title}</h3>
              <p style={{
                color: hoveredFeature === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.8)',
                lineHeight: 1.6
              }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            background: 'linear-gradient(45deg, #f093fb, #f5576c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>Shop by Category 🛒</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>Discover our wide range of tech products</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/products"
              style={{ textDecoration: 'none' }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div style={{
                position: 'relative',
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                transform: hoveredCategory === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                boxShadow: hoveredCategory === index ? `0 25px 50px ${category.color}40` : '0 15px 35px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: hoveredCategory === index ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.4s ease'
                }} />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${category.color}90, ${category.color}60)`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    transform: hoveredCategory === index ? 'scale(1.2) rotate(10deg)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>{category.icon}</div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}>{category.name}</h3>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    opacity: 0.9
                  }}>{category.description}</p>
                  <span style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>{category.count}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        margin: '2rem',
        borderRadius: '25px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{
          background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Ready to Start Shopping? 🎉</h2>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.2rem',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>Join thousands of satisfied customers and discover amazing tech products at unbeatable prices!</p>
        <Link
          to="/products"
          style={{
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
          }}
        >
          🚀 Explore Products
        </Link>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;