import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productAPI } from '../api';
import { useCart } from '../CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await productAPI.getProductById(id);
      setProduct(data);
    } catch (err) {
      setError('Failed to fetch product details');
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <div className="product-detail-container">Loading...</div>;
  if (error) return <div className="product-detail-container">Error: {error}</div>;
  if (!product) return <div className="product-detail-container">Product not found</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <div className="product-detail-price">₹{product.price}</div>
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/products" className="back-link">← Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductDetail;