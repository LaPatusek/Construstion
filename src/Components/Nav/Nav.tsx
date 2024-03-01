import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/testlogo.png';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <nav className={`${styles.nav} grid`}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} alt='Architektura SNW' />
        </Link>
      </div>

      <div className={`${styles.navbar} grid`}>
        <Link to='/oferta'>Oferta</Link>
        <Link to='/projekty'>Projekty</Link>
        <Link to='/o-nas'>O nas</Link>
        <Link to='/kontakt'>Kontakt</Link>
      </div>
    </nav>
  );
};

export default Nav;
