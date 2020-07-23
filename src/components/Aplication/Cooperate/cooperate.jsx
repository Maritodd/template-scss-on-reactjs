import React from 'react';
import whatsapp from "../../../images/whatsapp.png";
import telega from "../../../images/telega.png";
import viber from "../../../images/viber.png";
import mail from "../../../images/mail.mp4";

const Cooperate = () => {
    return (
        <section className="cooperate" id={7}>
            <div className="cooperate-text">
                <span className="cooperate-text__title">Хочу сотрудничать!</span>
            </div>
            <div className="cooperate-connection">
                <form className="cooperate-connection__form">
                    <input className="cooperate-connection__form_input" type="text" placeholder="Ваше имя"/>
                    <input className="cooperate-connection__form_input" type="tel" placeholder="Ваш телефон"/>
                    <input className="cooperate-connection__form_input" type="email" placeholder="Ваш email"/>
                    <select className="cooperate-connection__form_select" id="country" name="country"
                            placeholder="Страна">
                        <option value="" disabled selected>Страна</option>
                        <option className="cooperate-connection__form_select" value="Ukraine">Ukraine</option>
                        <option className="cooperate-connection__form_select" value="USA">USA</option>
                    </select>
                    <div className="cooperate-connection__form_checkbox">
                        <label className="label">
                            <input className="label-check" type="checkbox"/><span className="label-check__text"><img
                            className="label-check__img" src={whatsapp} alt="socilas"/>Whats App</span>
                        </label>
                        <label className="label">
                            <input className="label-check" type="checkbox"/><span className="label-check__text"><img
                            className="label-check__img" src={telega} alt="socilas"/>Telegram</span>
                        </label>
                        <label className="label">
                            <input className="label-check" type="checkbox"/><span className="label-check__text"><img
                            className="label-check__img" src={viber} alt="socilas"/>Viber</span>
                        </label>
                    </div>
                    <input className="cooperate-connection__form_button" type="button"
                           value="Свяжитесь со мной!"/>
                </form>
                <span className="cooperate-connection__text">Нажимая на кнопку «Свяжитесь со мной» Вы соглашаетесь на обработку персональных данных</span>
            </div>
            <div className="cooperate-theme">
                <video className="cooperate-theme__img" src={mail} autoPlay="autoplay" loop="loop"
                       muted="muted"/>
            </div>
        </section>
    );
}

export default Cooperate;
