// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.linkList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;