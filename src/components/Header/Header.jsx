import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h3>Rick and Morty</h3>
    <div className={styles.links}>
      <Link to="/">Home</Link>
    </div>
  </header>
);

export default Header;
