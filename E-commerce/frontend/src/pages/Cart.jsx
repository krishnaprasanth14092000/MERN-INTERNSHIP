import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          Shopping Cart
        </h2>
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <p>Your cart is empty</p>
          <p>Add some products to get started!</p>
          <Link to="/products" style={{ 
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            background: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
        Shopping Cart ({cartItems.length} items)
      </h2>
      
      {cartItems.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Category: {item.category}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <label>Quantity:</label>
              <button 
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                style={{ padding: '0.25rem 0.5rem', background: '#ddd', border: 'none', borderRadius: '3px' }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                style={{ padding: '0.25rem 0.5rem', background: '#ddd', border: 'none', borderRadius: '3px' }}
              >
                +
              </button>
              <span style={{ marginLeft: '1rem', fontWeight: 'bold' }}>
                Subtotal: ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <button 
            className="remove-btn"
            onClick={() => removeFromCart(item._id)}
          >
            Remove
          </button>
        </div>
      ))}
      
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '15px',
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3>Total: ₹{getCartTotal().toFixed(2)}</h3>
        <button style={{
          background: '#28a745',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;