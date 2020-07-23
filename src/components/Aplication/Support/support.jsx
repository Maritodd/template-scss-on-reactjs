import React from 'react';
import Popup from "reactjs-popup";
import file from "../../../images/file.png";
import company from "../../../images/company.png";

const Support = () => {
    return (
        <section className="support" id={5}>
            <div className="support-text">
                <span className="support-text__title">Ответы на вопросы</span>
            </div>
            <div className="support-box">
                <div className="support-questions">
                    <div className="support-questions__block">
                        <div className="box-sup">
                  <span
                      className="support-questions__block_question">Кто может воспользоваться услугами компании?</span>
                            <span className="support-questions__block_answer">Любое физическое или юридическое лицо из любой<br/> страны мира.</span>
                        </div>
                    </div>
                    <div className="support-questions__block">
                        <div className="box-sup">
                            <span className="support-questions__block_question">Можно ли разглашать или использовать<br/> информацию полученную от CTG Blockchain?</span>
                            <span className="support-questions__block_answer">Перед началом сотрудничества с потенциальным клиентом,<br/> мы в обязательном порядке подписываем документ NDA,<br/> который определяет условия неразглашения.</span>
                        </div>
                    </div>
                    <div className="support-questions__block">
                        <div className="box-sup">
                            <span className="support-questions__block_question">В какой юрисдикции работает компания<br/> CTG Blockchain?</span>
                            <span className="support-questions__block_answer">Наша компания работает в юрисдикци Швейцарии, но мы имеем возможность оказывать услуги в любой точке планеты
                    и использовать правовое поле в необходимой<br/> для клиента юрисдикции.</span>
                        </div>
                    </div>
                </div>
                <div className="support-questions">
                    <div className="support-questions__block">
                        <div className="box-sup">
                            <span className="support-questions__block_question">Что делает компания CTG Blockchain<br/> с личными данными, которые я предоставляю?</span>
                            <span
                                className="support-questions__block_answer">Все данные клиентов находятся под должным уровнем<br/> защиты от несанкционированного использования и не<br/> передаются
                    третьим лицам(в том числе по официальному<br/> запросу). Компания CTG Blockchain внедрила<br/> соответствующие физические, электронные и<br/>
                    управленческие ресурсы для защиты ваших личных данных<br/> и предотвращения несанкционированного к ним доступа<br/> или разглашения.</span>
                        </div>
                    </div>
                    <div className="support-questions__block">
                        <div className="box-sup">
                            <span className="support-questions__block_question">Где получить подробную информацию<br/> о компании?</span>
                            <span className="support-questions__block_answer">Наша компания работает с 2013 года и имеет<br/> штаб-квартиру в Цуге. Мы активно предоставляем IT-услуги<br/> для разработки полнофункциональных бизнес-решений.</span>
                            <div className="link-sup">
                                <Popup trigger={
                                    <a className="support-questions__block_link">
                                        <img className="support-questions__block_link--img" src={file}
                                             alt="file"/>
                                        <span className="support-questions__block_link--text">Подробнее о компании</span>
                                        <span className="support-questions__block_link--arrow">❯</span>
                                    </a>} modal repositionOnResize="true">
                                    {close => (
                                        <div className="modal">
                                            <a className="close" onClick={close}>&times;</a>
                                            <div className="modal-faq">
                                                <img className="modal-faq__company" src={company} alt="doc"/>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support;
