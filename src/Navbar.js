import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      {/* Instagram Logo */}
      <img
        src="/images/instagram-logo.png"
        alt="Instagram Logo"
        className="navbar-logo"
      />

      {/* Navigation Links */}
      <div className="navbar-links">
        <p>Home</p>
        <p>Explore</p>
        <p>Profile</p>
      </div>
    </div>
  );
}

export default Navbar;