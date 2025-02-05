import React from 'react';
import styles from './styles.module.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactData = {
    titulo: "Informação de ",
    colorTitle: "contato",
    descricao: "Para qualquer informação entre em contato com nossa equipe.",
    contatos: [
        {
            tipo: "Local",
            icone: <FaMapMarkerAlt />,
            detalhes: [
                "Sapiranga-RS, 93800-010",
                "Av. Lorem Ipsum"
            ]
        },
        {
            tipo: "Entre em contato",
            icone: <FaPhoneAlt />,
            detalhes: [
                "(51) xxxxx-xxx",
                "xxxx xxx xxxx"
            ]
        },
        {
            tipo: "Envie um e-mail",
            icone: <FaEnvelope />,
            detalhes: [
                "seuemail@gmail.com",
                "loremipsum@gmail.com"
            ]
        }
    ]
};

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <div className={styles.contactTitles}>

                <h2 className={styles.contactTitle}>{contactData.titulo}</h2><h2>{contactData.colorTitle}</h2>
                </div>
                <p className={styles.contactDescription}>{contactData.descricao}</p>
                
                <div className={styles.contactCards}>
                    {contactData.contatos.map((contato, index) => (
                        <div key={index} className={styles.contactCard}>
                            <span className={styles.contactIcon}>{contato.icone}</span>
                            <h3 className={styles.contactType}>{contato.tipo}</h3>
                            <div className={styles.contactDetails}>
                                {contato.detalhes.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
