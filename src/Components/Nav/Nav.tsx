import { HambergerMenu } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/testlogo.png';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const zeroMenuItemRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLDivElement>(null);
  const secondMenuItemRef = useRef<HTMLDivElement>(null);
  const thirdMenuItemRef = useRef<HTMLDivElement>(null);
  const forthMenuItemRef = useRef<HTMLDivElement>(null);

  const MenuHandler = () => {
    setMenuState((s) => !s);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflowY = 'hidden';

      const menuRefCurr = menuRef.current!;
      const zeroItemCurr = zeroMenuItemRef.current!;
      const firstItemCurr = firstMenuItemRef.current!;
      const secondItemCurr = secondMenuItemRef.current!;
      const thirdItemCurr = thirdMenuItemRef.current!;
      const forthItemCurr = forthMenuItemRef.current!;

      setTimeout(() => {
        menuRefCurr?.classList.toggle(styles['active-menu']);
      }, 250);

      setTimeout(() => {
        zeroItemCurr?.classList.toggle(styles['active-menu-item']);
        firstItemCurr?.classList.toggle(styles['active-menu-item']);
        secondItemCurr?.classList.toggle(styles['active-menu-item']);
        thirdItemCurr?.classList.toggle(styles['active-menu-item']);
        forthItemCurr?.classList.toggle(styles['active-menu-item']);
      }, 370);
    }
    if (!menuState) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuState]);

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

      <div className={styles['wrap-800']}>
        <HambergerMenu
          color={menuState ? '#fff' : '#000'}
          size={34}
          className={styles['menu-button']}
          onClick={MenuHandler}
        />
        {menuState && (
          <div className={styles.background} onClick={MenuHandler}>
            <div className={`${styles['menu-800']} grid`} ref={menuRef}>
              <div
                className={`${styles['menu-item']} grid`}
                ref={zeroMenuItemRef}
              >
                <Link to='/'>Strona Główna</Link>
              </div>
              <div
                className={`${styles['menu-item']} grid`}
                ref={firstMenuItemRef}
              >
                <Link to='/oferta'>Oferta</Link>
              </div>
              <div
                className={`${styles['menu-item']} grid`}
                ref={secondMenuItemRef}
              >
                <Link to='/projekty'>Projekty</Link>
              </div>
              <div
                className={`${styles['menu-item']} grid`}
                ref={thirdMenuItemRef}
              >
                <Link to='/o-nas'>O nas</Link>
              </div>
              <div
                className={`${styles['menu-item']} grid`}
                ref={forthMenuItemRef}
              >
                <Link to='/kontakt'>Kontakt</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
