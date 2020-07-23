import React from 'react';
import './style.css';
import Aplication from "./components/Aplication/aplication";

function App(props) {

    return (
        <Aplication store={props.store}/>
    );
}

export default App;
