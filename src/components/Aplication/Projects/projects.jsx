import React from 'react';
import ProjectCarousel from "./prjojectSlider";

const Projects = (props) => {
    return (
        <section className="projects" id={3}>
            <div className="projects-text">
                <span className="projects-text__title">Некоторые реализованные проекты</span>
                <span className="projects-text__subtitle">Обязательства по NDA не позволяют нам раскрывать все реализованные проекты.</span>
            </div>
            <div className="projects-ready">
                <ProjectCarousel projectPage={props.projectPage} />
            </div>
        </section>
    );
}

export default Projects;
