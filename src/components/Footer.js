import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <p>Desenvolvido por <a href="https://github.com/benetesla" target="_blank" rel="noreferrer">Benetesla</a></p>
            <p>© 2023 - Todos os direitos reservados</p>
            <div className="social">
                <a href="https://github.com/benetesla" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bene-tesla/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/bene_tesla/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Footer;
