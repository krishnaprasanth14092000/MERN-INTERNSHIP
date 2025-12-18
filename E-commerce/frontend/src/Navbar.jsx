// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       <Link to="/cart">Cart</Link>
//       <Link to="/contact">Contact Us</Link>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       style={{
//         padding: "15px",
//         background: "#222",
//         display: "flex",
//         gap: "20px"
//       }}
//     >
//       <Link to="/" style={{ color: "white" }}>Home</Link>
//       <Link to="/products" style={{ color: "white" }}>Products</Link>
//       <Link to="/cart" style={{ color: "white" }}>Cart</Link>
//       <Link to="/contact" style={{ color: "white" }}>Contact Us</Link>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Navbar() {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🛒 TechShop</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span style={{ background: '#ff4757', color: 'white', borderRadius: '50%', padding: '0.2rem 0.5rem', fontSize: '0.8rem', marginLeft: '0.5rem' }}>({cartCount})</span>}
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
