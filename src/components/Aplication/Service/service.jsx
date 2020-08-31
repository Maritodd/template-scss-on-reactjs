import React from 'react';
import arrow1 from "../../../images/arrow1.png";
import arrow from "../../../images/arrow.png";
import Carousel from "./Slider/slider";
import Portal from "@material-ui/core/Portal";
import {makeStyles} from "@material-ui/core/styles";
import ServiceContainer from "./Slider/serviceContainer";
import ServiceDescription from "./Slider/serviceDescription";


class Service extends React.Component {

    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {

        let serviceDescription = this.props.servicePage.services.map(s => <ServiceDescription id={s.id} service={s.service} subtheme={s.subtheme}/>)


        return (
            <section className="service" id={1} data-aos="fade-up">
                <div className="service-text">
                    <p className="service-title">Предоставляемые услуги</p>
                    <div className="arrows">
                        <button className="arrow arrow__left"><img src={arrow1} alt="arrow"/></button>
                        <button className="arrow arrow__right"><img src={arrow} alt="arrow"/></button>
                    </div>
                </div>
                <div className="service-allow" onClick={this.toggle}>
                    <Carousel servicePage={this.props.servicePage} />
                </div>
                {this.state.on && {serviceDescription}
                // <div>
                //     <div className="service-desc aos-init aos-animate" data-aos="fade-up">
                //         <h4 className="service-subtitle">{this.props.service}</h4>
                //         <div className="service-subtitle__text">{this.props.text}</div>
                //     </div>
                //     <div className="service-theme">
                //         <img src={this.props.subtheme} alt="ico"/>
                //     </div>
                // </div>
                }
            </section>
        );
    }
}

export default Service;
