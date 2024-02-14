import React from 'react';
import { Link } from 'react-router-dom';
import construstion from '../../Assets/Construction.webp';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} relative`}>
      <img src={construstion} alt='' />
      <div className={styles['header-box']}>
        <h1>
          A Better World has to <br /> be Built
        </h1>
        <Link to='/kontakt'>Skontaktuj się już dziś</Link>
      </div>
    </header>
  );
};

export default Header;
