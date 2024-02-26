import { ArrowCircleRight } from 'iconsax-react';
import React from 'react';
import propImg from '../Assets/przemysl.jpg';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <div>
      <div className={styles['title-wrap']}>
        <div className={styles.title}>
          <h1>Nasze projekty</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae maximus magna. Suspendisse potenti. Integer lacus metus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae
            maximus magna. Suspendisse potenti. Integer lacus metus.
          </h2>
        </div>
      </div>

      <div className={`${styles.projects} grid`}>
        <div className={styles.box}>
          <div className={styles['image-wrap']}>
            <img src={propImg} alt='Prop' />
            <ArrowCircleRight color='#fff' size={36} />
          </div>
          <h3>Projekt 1</h3>
          <h4>Krótki opis projektu 1</h4>
        </div>
        <div className={styles.box}>
          <div className={styles['image-wrap']}>
            <img src={propImg} alt='Prop' />
            <ArrowCircleRight color='#fff' size={36} />
          </div>
          <h3>Projekt 2</h3>
          <h4>Krótki opis projektu 2</h4>
        </div>
        <div className={styles.box}>
          <div className={styles['image-wrap']}>
            <img src={propImg} alt='Prop' />
            <ArrowCircleRight color='#fff' size={36} />
          </div>
          <h3>Projekt 3</h3>
          <h4>Krótki opis projektu 3</h4>
        </div>
        <div className={styles.box}>
          <div className={styles['image-wrap']}>
            <img src={propImg} alt='Prop' />
            <ArrowCircleRight color='#fff' size={36} />
          </div>
          <h3>Projekt 4</h3>
          <h4>Krótki opis projektu 4</h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
