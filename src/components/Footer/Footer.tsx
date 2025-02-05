import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logoFooter.png';
import texts from './utils/informations.json'; 

const footerData = texts;

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <img src={logo} alt="Logo" />
                </div>

                <div className={styles.footerColumn}>
                    <h3>{footerData.menu.title}</h3>
                    <ul>
                        {footerData.menu.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>{footerData.servicos.titulo}</h3>
                    <ul>
                        {footerData.servicos.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>{footerData.contatos.titulo}</h3>
                    <ul>
                        {footerData.contatos.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>{footerData.copyright}</p>
            </div>
        </footer>
    );
}