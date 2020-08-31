import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';
import ServiceContainer from "./serviceContainer";
import ServiceDescription from "./serviceDescription";
import {makeStyles} from "@material-ui/core/styles";
import Portal from "@material-ui/core/Portal";


class Carousel extends Component {

    render() {
        const settings = {
            adaptiveHeight: false,
            arrows: false,
            arrowsBlock: false,
            arrowsScroll: 2,
            autoplay: true,
            autoplaySpeed: 2500,
            centerPadding: 10,
            className: 'Carousel',
            duration: 200,
            wheel: true,
            wheelScroll: 1,
            initialSlide: 1,
            pauseOnHover: true,
            slidesToShow: 7,
        };

        let serviceElement = this.props.servicePage.services.map(s => <ServiceContainer id={s.id} photo={s.photo}
                                                                                        service={s.service}/>)
        // let serviceDescription = this.props.servicePage.services.map(s => <ServiceDescription id={s.id} service={s.service} subtheme={s.subtheme}/>)

        return (
            <div>
                <Slider {...settings} >
                    {serviceElement}
                </Slider>

            </div>
        );
    }
}

export default Carousel;
