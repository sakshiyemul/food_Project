import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FoodContext } from '../../context/FoodContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { cart, setCart, addToCart } = useContext(FoodContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          <span className="logo-icon">🍔</span> Swigatto
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link text-white">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
            {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
