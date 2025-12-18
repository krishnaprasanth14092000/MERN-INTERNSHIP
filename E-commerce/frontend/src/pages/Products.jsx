import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productAPI } from '../api';
import { useCart } from '../CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <div className="products-container">Loading products...</div>;
  if (error) return <div className="products-container">Error: {error}</div>;

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Our Products</h2>
        <Link to="/add-product" className="add-product-btn">
          Add Product
        </Link>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`} className="product-link">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <div className="product-info">
                <span className="product-price">₹{product.price}</span>
                <span className="product-category">{product.category}</span>
              </div>
            </Link>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;