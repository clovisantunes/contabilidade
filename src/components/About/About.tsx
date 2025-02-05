import React from 'react';
import styles from './styles.module.scss';

const aboutData = {
  nossaHistoria: {
    titulo: "Nossa ",
    colorTitle: "história",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  nossaVisao: {
    titulo: "Nossa ",
    colorTitle: "visão",
    descricao: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  nossaMissao: {
    titulo: "Nossa ",
    colorTitle: "missão",
    descricao: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  nossosValores: {
    titulo: "Nossos ",
    colorTitle: "valores",
    descricao: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
};

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>

        <div className={styles.aboutContent}>
          {Object.values(aboutData).map((item, index) => (
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