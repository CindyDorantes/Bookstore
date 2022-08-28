import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbarCont}>
    <header className={styles.navHeader}>
      <p className={styles.navTitle}>Bookstore CMS</p>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.navLink}>BOOKS</Link>
        <Link to="/categories" className={styles.navLink}>CATEGORIES</Link>
      </nav>
    </header>
  </div>
);

export default Navbar;
