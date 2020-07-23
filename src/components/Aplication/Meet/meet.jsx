import React from 'react';
import Popup from "reactjs-popup";
import MeetContainer from "./meetContainer";



const Meet = (props) => {

    let state = props.meetPage;
    let meetItem = state.info.map( m => <MeetContainer id={m.id} name={m.name} position={m.position} photo={m.photo} description={m.description}/>);


    return (
        <section className="meet" id={4}>
            <div className="meet-text">
                <span className="meet-text__title">Давайте познакомимся </span>
            </div>
            <div className="meet-blocks">
                    {meetItem}
            </div>
        </section>
    );
}

export default Meet;
