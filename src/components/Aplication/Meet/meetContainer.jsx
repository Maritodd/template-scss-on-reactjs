import React from 'react';
import Popup from "reactjs-popup";
import './../../../style.css';

const MeetContainer = (props) => {
    return (
        <Popup trigger={
            <div className="meet-block">
                <div className="meet-block__item" data-aos="fade-up">
                    <img className="meet-block__img" src={props.photo} alt="employers"/>
                    <div className="meet-block__item_desc">
                        <span className="meet-block__name">{props.name}</span>
                        <span className="meet-block__status">{props.position}</span>
                    </div>
                    <div className="meet-block__item_open">
                        <p>❯</p>
                    </div>
                </div>
            </div>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>&times;</a>
                    <div className="modal-block">
                        <img className="modal-block__img" src={props.photo} alt="employers"/>
                        <div className="modal-block__item">
                            <span className="modal-block__item_name">{props.name}</span>
                            <span
                                className="modal-block__item_status">{props.position}</span>
                            <span className="modal-block__item_exp">{props.description}</span>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default MeetContainer;
