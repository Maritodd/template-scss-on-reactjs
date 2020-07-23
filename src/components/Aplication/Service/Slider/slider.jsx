import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';



class Carousel extends Component {
    render() {
        const settings = {
            adaptiveHeight: false,
            arrows: false,
            arrowsBlock: true,
            arrowsScroll: 2,
            autoplay: true,
            autoplaySpeed: 2500,
            centerPadding: 10,
            className: 'Carousel',
            duration: 100,
            initialSlide: 1,
            pauseOnHover: true,
            slidesToShow: 5
        };
        return (
            <div >
                <Slider {...settings} >
                        <div className="service-allow__item">
                            <div className="service-allow__item_container">
                                <img className="service-allow__item_img" src={this.props.photo} alt="services"/>
                                <span className="service-allow__item_text">{this.props.services}</span>
                            </div>
                            <div className="service-allow__item_open">
                                <p>❯</p>
                            </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;
