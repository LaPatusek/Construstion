import React from 'react';
import propImg from '../Assets/dom.jpg';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing. <br /> Suspendisse
          vitae maximus magna.
        </h1>
        <h2>
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae maximus magna. Suspendisse potenti. Integer lacus metus, non
          erat id, placerat dictum urna.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae maximus magna. Suspendisse potenti. Integer lacus metus, non
          erat id, placerat dictum urna.
        </h2>
      </div>
      <div className={`${styles['second-section']} grid`}>
        <div className={styles['left-section']}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae maximus magna. Suspendisse potenti. Integer lacus metus, non
            erat id, placerat dictum urna. <br /> <br /> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse vitae maximus magna.
            Suspendisse potenti. Integer lacus metus, non erat id, placerat
            dictum urna.
          </p>
        </div>
        <img src={propImg} alt='' />

        <img src={propImg} alt='' />
        <div className={styles['right-section']}>
          <h3>Lorem ipsum dolor sit amet</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae maximus magna. Suspendisse potenti. Integer lacus metus, non
            erat id, placerat dictum urna. <br /> <br /> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse vitae maximus magna.
            Suspendisse potenti. Integer lacus metus, non erat id, placerat
            dictum urna.
          </p>
        </div>
      </div>
      <div className={styles.approach}>
        <h3>Nasze podejście</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae maximus magna. Lorem ipsum dolor sit amet, consectetur
          adipiscing.
        </h4>
        <div className={`${styles.boxes} grid`}>
          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>

          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>

          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>

          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>

          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>

          <div className={styles.box}>
            <img src={propImg} alt='' />
            <h5>Lorem ipsum</h5>
            <ol>
              <li> Lorem ipsum dolor sit amet</li>
              <li> Lorem ipsum dolor sit amet</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
