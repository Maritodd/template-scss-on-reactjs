import React from 'react';


const ProjectContainer = (props) => {
    return (
        <div className="projects-ready__block">
            <img className="projects-ready__block_img" src={props.logo} alt="logo"/>
            <div className="projects-ready__block_title">
                <span className="projects-ready__block_title--name">{props.project}<span
                    className="tag">{props.tag}</span></span>
                <span className="projects-ready__block_title--price">{props.price}</span>
            </div>
            <img className="projects-ready__block_chart" src={props.chart} alt="chart"/>
        </div>
    );
}

export default ProjectContainer;
