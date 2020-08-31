import React from 'react';


const ServiceDescription = (props) => {
        return (
            <div>
                <div className="service-desc aos-init aos-animate" data-aos="fade-up">
                    <h4 className="service-subtitle">{props.service}</h4>
                    <div className="service-subtitle__text">f</div>
                </div>
                <div className="service-theme">
                    <img src={props.subtheme} alt="ico"/>
                </div>
            </div>
        );
}

export default ServiceDescription;
