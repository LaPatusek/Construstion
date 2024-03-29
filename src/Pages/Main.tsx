import { Global, House, People } from 'iconsax-react';
import React, { Fragment, useRef } from 'react';
import house from '../Assets/dom.jpg';
import flat from '../Assets/mieszkanie.jpg';
import construction from '../Assets/przemysl.jpg';
import Header from '../Components/Header/Header';
import useObserver from '../Components/hooks/useObserver';
import styles from './Main.module.css';

const Main: React.FC = () => {
  const BoxesRef = useRef<HTMLDivElement>(null);
  const boxIsVis = useObserver(BoxesRef);

  const iconSize = 44;

  return (
    <Fragment>
      <Header />
      <div className={styles.wrap}>
        <div className={styles['first-section']}>
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae maximus magna. Suspendisse potenti. Integer
              lacus metus, iaculis non erat id, placerat dictum urna. Duis ut
              scelerisque leo. Nulla eros augue, sagittis sit amet metus quis,
              molestie sagittis nibh. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse vitae maximus magna.
            </p>
          </div>
        </div>
        <div className={styles['second-section']}>
          <h3>Od 2002 w branży</h3>
          <div className={`${styles['box-wrap']} grid`} ref={BoxesRef}>
            <div
              className={`${styles.box} ${
                boxIsVis ? styles['first-active-box'] : ''
              }`}
            >
              <div>
                <span className={styles.number} />
                <h4>
                  Ukończonych <br /> projektów
                </h4>
              </div>
              <div className={styles.icon}>
                <Global variant='Bold' size={iconSize} />
              </div>
            </div>

            <div
              className={`${styles.box} ${
                boxIsVis ? styles['second-active-box'] : ''
              }`}
            >
              <div>
                <span className={styles.number} />
                <h4>
                  Wybudowanych <br /> domów
                </h4>
              </div>
              <div className={`${styles.icon} ${styles['mid-icon']}`}>
                <House variant='Bold' size={iconSize} />
              </div>
            </div>

            <div
              className={`${styles.box} ${
                boxIsVis ? styles['third-active-box'] : ''
              }`}
            >
              <div>
                <span className={styles.number} />
                <h4>
                  Zatrudnionych <br /> specjalistów
                </h4>
              </div>
              <div className={styles.icon}>
                <People variant='Bold' size={iconSize} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['third-section-wrap']}>
        <div className={styles['third-section']}>
          <h3>Odkryj nasze usługi</h3>
          <div className={`${styles['boxes-wrap']} grid`}>
            <div className={styles['left-box']}>
              <img src={construction} alt='Budownictwo Przemysłowe' />
              <h4>Budownictwo przemysłowe</h4>
            </div>

            <div className={`grid`} style={{ rowGap: '10px' }}>
              <div className={styles['right-box']}>
                <img src={house} alt='Budowa Domów Jednorodzinnych' />
                <h4>Budowa domów jednorodzinnych</h4>
              </div>

              <div className={styles['right-box']}>
                <img src={flat} alt='Remonty i Modernizacja Mieszkań' />
                <h4>Remonty i modernizacja mieszkań</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
