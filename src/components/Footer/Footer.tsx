import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logoFooter.png'

const footerData = {
    menu: {
        titulo: "Menu",
        itens: ["Início", "Serviços", "Sobre", "Contato"]
    },
    servicos: {
        titulo: "Serviços",
        itens: [
            "Contabilidade",
            "Orçamento Empresarial",
            "Escrita Fiscal",
            "Departamento Pessoal",
            "Controle de Custos",
            "Certificado Digital"
        ]
    },
    contatos: {
        titulo: "Nossos Contatos",
        itens: [
            "Sapiranga-RS, 93800-010",
            "(51) xxxxx-xxx",
            "xxxx xxx xxxx",
            "seuemail@gmail.com",
            "Veja mais",
            "loremipsum@gmail.com"
        ]
    },
    copyright: "© DevRoom 2024. Todos os direitos reservados."
};

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                {/* Coluna da Logo */}
                <div className={styles.footerLogo}>
                    <img src={logo} alt="Logo" />
                </div>

                {/* Coluna do Menu */}
                <div className={styles.footerColumn}>
                    <h3>{footerData.menu.titulo}</h3>
                    <ul>
                        {footerData.menu.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Coluna dos Serviços */}
                <div className={styles.footerColumn}>
                    <h3>{footerData.servicos.titulo}</h3>
                    <ul>
                        {footerData.servicos.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Coluna de Contatos */}
                <div className={styles.footerColumn}>
                    <h3>{footerData.contatos.titulo}</h3>
                    <ul>
                        {footerData.contatos.itens.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.footerBottom}>
                <p>{footerData.copyright}</p>
            </div>
        </footer>
    );
}
