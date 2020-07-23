import React from 'react';
import arrow1 from "../../../images/arrow1.png";
import arrow from "../../../images/arrow.png";
import Carousel from "./Slider/slider";
import Slider from "infinite-react-carousel";

const Service = (props) => {

    let state = props.servicePage;
    let serviceElement = state.services.map(s => <Carousel id={s.id} photo={s.photo} service={s.service} subtheme={s.subtheme}/>)

    return (
        <section className="service" id={1} data-aos="fade-up">
            <div className="service-text">
                <p className="service-title">Предоставляемые услуги</p>
                <div className="arrows">
                    <button className="arrow arrow__left"><img src={arrow1} alt="arrow"/></button>
                    <button className="arrow arrow__right"><img src={arrow} alt="arrow"/></button>
                </div>
            </div>
            <div className="service-allow">
                <div>
                {serviceElement}
                </div>
            </div>
            <div className="service-desc aos-init aos-animate" data-aos="fade-up">
                <h4 className="service-subtitle">{props.services}</h4>
                <div className="service-subtitle__text">f</div>
            </div>
            <div className="service-theme">
                <img src={props.subtheme} alt="ico"/>
            </div>
        </section>
    );
}

export default Service;
