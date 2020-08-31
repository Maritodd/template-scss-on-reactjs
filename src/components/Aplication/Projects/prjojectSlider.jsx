import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';
import ProjectContainer from "./projectContainer";


class ProjectCarousel extends Component {
    render() {
        const settings = {
            adaptiveHeight: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500,
            className: 'CarouselProject',
            duration: 200,
            wheel: true,
            wheelScroll: 1,
            pauseOnHover: true,
            slidesToShow: 5,
        };

        let projectElement = this.props.projectPage.projects.map(s => <ProjectContainer id={s.id} logo={s.logo} project={s.project} chart={s.chart} tag={s.tag} price={s.price}/>)

        return (
            <div>
                <Slider {...settings} >
                    {projectElement}
                </Slider>
            </div>
        );
    }
}

export default ProjectCarousel;
