import React from 'react';
import cube1 from "../../../images/cube1.mp4";
import cube3 from "../../../images/cube3.mp4";
import arrow1 from "../../../images/arrow1.png";
import cube2 from "../../../images/cube2.mp4";

const Roadmap = () => {
    return (
        <section className="roadmap" id={2}>
            <div className="roadmap-first" data-aos="fade-up">
                <div className="roadmap-cube">
                    <video src={cube1} autoPlay="autoplay" loop="loop"
                           muted="muted"/>
                </div>
                <div className="roadmap-first__text">
                    <div className="roadmap-title">Roadmap по партнерству</div>
                    <div className="roadmap-num">01</div>
                    <div className="roadmap-subtitle">Первый контакт.</div>
                    <div className="roadmap-desc">
                                <span>Начало коммуникации, при котором вы рассказываете об интересующих услугах,
                    а мы выясняем исходные данные для формирования предложения.</span>
                    </div>
                </div>
            </div>
            <div className="roadmap-second" data-aos="fade-up">
                <div className="roadmap-cube">
                    <video src={cube3} autoPlay="autoplay" loop="loop"
                           muted="muted"/>
                </div>
                <div className="roadmap-first__text">
                    <div className="roadmap-num">02</div>
                    <div className="roadmap-subtitle">Начало сотрудничества <img
                        className="roadmap-subtitle__arrow"
                        src={arrow1}/> Партнерство.
                    </div>
                    <div className="roadmap-desc"><span>На основании проанализированной информации, мы предлагаем варианты решения задач,
                    после чего подписываем NDA и совместно согласовываем условия взаимодействия.<br/><br/>
                    Сообща мы исполняем все необходимые условия инициирующие проект, после чего наши сотрудники приступают к реализации.</span>
                    </div>
                </div>
            </div>
            <div className="roadmap-third" data-aos="fade-up">
                <div className="roadmap-cube">
                    <video src={cube2} autoPlay="autoplay" loop="loop"
                           muted="muted"/>
                </div>
                <div className="roadmap-first__text">
                    <div className="roadmap-num">03</div>
                    <div className="roadmap-subtitle">Выгоды.</div>
                    <div className="roadmap-desc"><span>Мы достигаем поставленных целей согласно договору и вы получаете запланированные выгоды от сотрудничества. Шампанское и подписание закрывающих документов.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
