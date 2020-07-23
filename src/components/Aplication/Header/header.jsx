import React from 'react';
import theme from "../../../images/theme.png";
import cube from "../../../images/cube.mp4";
import logo_icon from "../../../images/logo_icon.svg";
import gridWorld from "../../../images/grid-world.png";
import '../../../style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-theme">
                <img src={theme} alt="theme"/>
            </div>
            <div className="header-image">
                <video className="header-image__item" src={cube} autoPlay="autoplay" loop="loop" muted="muted"/>
            </div>
            <div className="header-sticky">
                <a className="header-logo" href="#">
                    <img className="header-logo__cube" src={logo_icon} alt="logo"/>
                    <h2 className="header-logo__name">ctg blockchain gmbh</h2>
                </a>
                <div className="header-navbar">
                    <a href="#1" className="header-navbar__item">Услуги</a>
                    <a href="#2" className="header-navbar__item">Roadmap</a>
                    <a href="#3" className="header-navbar__item">Портфолио</a>
                    <a href="#4" className="header-navbar__item">Команда</a>
                    <a href="#5" className="header-navbar__item">FAQ</a>
                    <a href="#6" className="header-navbar__item">Партнеры</a>
                </div>
                <div className="header-contact">
                    <div className="header-contact__world">
                        <span className="header-contact__world_language"><img src={gridWorld}/></span>
                        <div className="header-contact__world_language--dropdown">
                            <a className="dropdown-item" href="#">Русский</a>
                            <a className="dropdown-item" href="#">English</a>
                            <a className="dropdown-item" href="#">Deutsch</a>
                            <a className="dropdown-item" href="#">Espanol</a>
                            <a className="dropdown-item" href="#">中國</a>
                        </div>
                    </div>
                    <a className="header-contact__us" href="#7">Свяжитесь со мной</a>
                </div>
            </div>
            <div className="header-text" data-aos="fade-up">
                <h1 className="header-title"><span
                    className="header-title__elem">Компания которая приведет к успеху!</span><br/>
                    это CTG Blockchain</h1>
                <div className="header-subtitle">
                    <span>Более 20 крипто-проектов привлекли капитал благодаря сотрудничеству с нами! Мы собрали у себя лучшие услуги за 6 лет работы на крипто-рынке.</span>
                </div>
                <div className="header-button">
                    <a href="#" className="header-button__cooperate">Сотрудничать!</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
