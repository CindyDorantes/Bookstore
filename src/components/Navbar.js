import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <header className="navHeader">
      <p className="navTitle">Bookstore CMS</p>
      <nav className="navBar">
        <Link to="/" className="navLink">BOOKS</Link>
        <Link to="/categories" className="navLink">CATEGORIES</Link>
      </nav>
    </header>
  </div>
);

export default Navbar;
