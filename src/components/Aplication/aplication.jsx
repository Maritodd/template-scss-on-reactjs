import React from 'react';
import '../../style.css';
import "aos/dist/aos.css";
import Header from "./Header/header";
import Service from "./Service/service";
import Roadmap from "./Roadmap/roadmap";
import Projects from "./Projects/projects";
import Partner from "./Partner/partner";
import Cooperate from "./Cooperate/cooperate";
import Support from "./Support/support";
import Footer from "./Footer/footer";
import AOS from 'aos';
import Meet from "./Meet/meet";
// import SlideRoutes from 'react-slide-routes';
// import { Route, useLocation } from 'react-router-dom';

function Aplication(props) {
    AOS.init({
        duration: 1200,
    });

    return (
        <div className="body">
            <div className="container">
                <Header />
                <Service servicePage={props.store.servicePage}/>
                <Roadmap/>
                <Projects/>
                <Partner/>
                <Meet meetPage={props.store.meetPage}/>
                <Support/>
                <Cooperate/>
                <Footer/>
            </div>
        </div>
    );
}

export default Aplication;
