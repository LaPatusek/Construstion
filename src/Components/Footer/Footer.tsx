import { ArrowUp2 } from 'iconsax-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const BackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles['navigation']}>
          <Link to='/'>Strona główna</Link>
          <Link to='/oferta'>Oferta</Link>
          <Link to='/projekty'>Projekty</Link>
          <Link to='/o-nas'>O nas</Link>
          <Link to='/kontakt'>Kontakt</Link>
        </div>
        <hr />
        <div className={`${styles.lower} grid`}>
          <h4>
            Strona wykonana przez Dawid Rusin
          </h4>
          <span onClick={BackToTop}>
            Powrót na Górę <ArrowUp2 size={'20'} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
