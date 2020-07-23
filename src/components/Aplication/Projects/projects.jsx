import React from 'react';
import zeepin from "../../../images/zeepin.png";
import zeepinChart from "../../../images/zeepin-chart.png";
import diamond from "../../../images/diamond.png";
import diamondChart from "../../../images/diamond-chart.png";
import sophia from "../../../images/sophia.png";
import sophiaChart from "../../../images/sophia-chart.png";
import blue from "../../../images/blue.png";
import blueChart from "../../../images/blue-chart.png";

const Projects = () => {
    return (
        <section className="projects" id={3}>
            <div className="projects-text">
                <span className="projects-text__title">Некоторые реализованные проекты</span>
                <span className="projects-text__subtitle">Обязательства по NDA не позволяют нам раскрывать все реализованные проекты.</span>
            </div>
            <div className="projects-ready">
                <div className="projects-ready__block">
                    <img className="projects-ready__block_img" src={zeepin} alt="zeepin"/>
                    <div className="projects-ready__block_title">
                                <span className="projects-ready__block_title--name">Zeepin <span
                                    className="tag">(ZPT)</span></span>
                        <span className="projects-ready__block_title--price">max $ 0,016431</span>
                    </div>
                    <img className="projects-ready__block_chart" src={zeepinChart} alt="zeepin"/>
                </div>
                <div className="projects-ready__block">
                    <img src={diamond} alt="diamond"/>
                    <div className="projects-ready__block_title">
                                <span className="projects-ready__block_title--name">Diamond <span
                                    className="tag">(DMD)</span></span>
                        <span className="projects-ready__block_title--price">max $ 34,16</span>
                    </div>
                    <img className="projects-ready__block_chart" src={diamondChart} alt="diamond"/>
                </div>
                <div className="projects-ready__block">
                    <img src={sophia} alt="sophia"/>
                    <div className="projects-ready__block_title">
                                <span className="projects-ready__block_title--name">SophiaTX <span
                                    className="tag">(SPHTX)</span></span>
                        <span className="projects-ready__block_title--price">max $ 1,396191</span>
                    </div>
                    <img className="projects-ready__block_chart" src={sophiaChart} alt="sophia"/>
                </div>
                <div className="projects-ready__block">
                    <img src={blue} alt="blue"/>
                    <div className="projects-ready__block_title">
                        <span className="projects-ready__block_title--name">Blue Protocol</span>
                        <span className="projects-ready__block_title--price">max $ 1,960765</span>
                    </div>
                    <img className="projects-ready__block_chart" src={blueChart} alt="blue"/>
                </div>
            </div>
        </section>
    );
}

export default Projects;
