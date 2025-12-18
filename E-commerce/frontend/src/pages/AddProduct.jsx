import React, { useState } from 'react';
import { productAPI } from '../api';
import { Link } from 'react-router-dom';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
    category: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Update image preview
    if (name === 'image' && value) {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await productAPI.createProduct(formData);
      setSuccess(true);
      setTimeout(() => {
        setFormData({
          name: '',
          price: '',
          image: '',
          description: '',
          category: ''
        });
        setImagePreview('');
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'Audio', icon: '🎧', color: '#ff6b6b' },
    { value: 'Accessories', icon: '⌨️', color: '#4ecdc4' },
    { value: 'Storage', icon: '💾', color: '#45b7d1' }
  ];

  const fieldIcons = {
    name: '🏷️',
    price: '💰',
    image: '🖼️',
    description: '📝',
    category: '📂'
  };

  if (success) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          padding: '3rem',
          borderRadius: '25px',
          textAlign: 'center',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          animation: 'bounceIn 0.8s ease-out'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{
            background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2rem',
            marginBottom: '1rem'
          }}>Product Added Successfully!</h2>
          <p style={{ color: '#666', marginBottom: '2rem' }}>Your product has been added to the store.</p>
          <Link
            to="/products"
            style={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            🛍️ View Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0' }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '20px',
        margin: '0 2rem 3rem 2rem',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
        <h1 style={{
          background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>Add New Product</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Expand your store with amazing products!</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Form Section */}
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            padding: '2.5rem',
            borderRadius: '25px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              {/* Product Name */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  {fieldIcons.name} Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'name' ? '#667eea' : '#e1e8ed'}`,
                    borderRadius: '15px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)',
                    transform: focusedField === 'name' ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Price */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  {fieldIcons.price} Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('price')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'price' ? '#667eea' : '#e1e8ed'}`,
                    borderRadius: '15px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)',
                    transform: focusedField === 'price' ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Image URL */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  {fieldIcons.image} Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Enter image URL"
                  value={formData.image}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('image')}
                  onBlur={() => setFocusedField(null)}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'image' ? '#667eea' : '#e1e8ed'}`,
                    borderRadius: '15px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)',
                    transform: focusedField === 'image' ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Category */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  {fieldIcons.category} Category
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {categories.map((cat) => (
                    <label
                      key={cat.value}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1rem 0.5rem',
                        border: `2px solid ${formData.category === cat.value ? cat.color : '#e1e8ed'}`,
                        borderRadius: '15px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: formData.category === cat.value ? `${cat.color}20` : 'rgba(255,255,255,0.8)',
                        transform: formData.category === cat.value ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={formData.category === cat.value}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{cat.icon}</div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: formData.category === cat.value ? cat.color : '#666' }}>
                        {cat.value}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  {fieldIcons.description} Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your product..."
                  value={formData.description}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('description')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: `2px solid ${focusedField === 'description' ? '#667eea' : '#e1e8ed'}`,
                    borderRadius: '15px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    minHeight: '100px',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.8)',
                    transform: focusedField === 'description' ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading
                    ? 'linear-gradient(45deg, #ccc, #999)'
                    : 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '1.2rem 2rem',
                  borderRadius: '15px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  transform: loading ? 'scale(0.98)' : 'scale(1)',
                  boxShadow: loading
                    ? 'none'
                    : '0 10px 25px rgba(102, 126, 234, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                  }
                }}
              >
                {loading ? (
                  <>
                    <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
                    Adding Product...
                  </>
                ) : (
                  <>
                    ✨ Add Product
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            padding: '2.5rem',
            borderRadius: '25px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            position: 'sticky',
            top: '2rem'
          }}>
            <h3 style={{
              background: 'linear-gradient(45deg, #f093fb, #f5576c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>📱 Live Preview</h3>
            
            <div style={{
              border: '2px dashed #ddd',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '1rem'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div style={{
                  fontSize: '3rem',
                  color: '#ddd',
                  marginBottom: '1rem'
                }}>🖼️</div>
              )}
              
              <h4 style={{
                color: '#333',
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                {formData.name || 'Product Name'}
              </h4>
              
              <p style={{
                color: '#666',
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}>
                {formData.description || 'Product description will appear here...'}
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem'
              }}>
                <span style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#667eea'
                }}>
                  ₹{formData.price || '0'}
                </span>
                {formData.category && (
                  <span style={{
                    background: '#f1f2f6',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: '#666'
                  }}>
                    {formData.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default AddProduct;