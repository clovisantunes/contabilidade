import React from 'react';
import styles from './styles.module.scss';
import texts from './utils/informations.json'; 

interface AboutItem {
  titulo: string;
  colorTitle: string;
  descricao: string;
}

interface AboutData {
  nossaHistoria: AboutItem;
  nossaVisao: AboutItem;
  nossaMissao: AboutItem;
  nossosValores: AboutItem;
}

export default function About() {
  const aboutData: AboutData = texts;

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutContent}>
            {Object.values(aboutData).map((item: AboutItem, index) => (
              <div key={index} className={styles.aboutItem}>
                <div className={styles.aboutTitles}>
                  <h2 className={styles.aboutTitle}>{item.titulo}</h2><h2 className={styles.aboutTitle}>{item.colorTitle}</h2>
                </div>
                <p className={styles.aboutDescription}>{item.descricao}</p>
              </div>
            ))}
          </div>
          <div className={styles.aboutImage}></div>
        </div>
      </div>
    </>
  );
}