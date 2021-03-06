import React from 'react';


const ServiceContainer = (props) => {
    return (
        <div className="service-allow__item">
            <div className="service-allow__item_container" >
                <img className="service-allow__item_img" src={props.photo} alt="services"/>
                <span className="service-allow__item_text">{props.service}</span>
                <div className="service-allow__item_open">
                    <p>❯</p>
                </div>
            </div>
        </div>
    );
}


export default ServiceContainer;



