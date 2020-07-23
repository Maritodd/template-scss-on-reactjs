import React from 'react';
import logo_icon from "../../../images/logo_icon.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <a className="header-logo footer-logo" href="#">
                <img className="header-logo__cube" src={logo_icon} alt="logo"/>
                <h2 className="header-logo__name">ctg blockchain gmbh</h2>
            </a>
            <span className="footer-copyright">© Все права защищены ®</span>
        </footer>
    );
}

export default Footer;
