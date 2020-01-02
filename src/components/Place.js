import './Place.css';
import React from 'react';

function Place(props) {
    return (
        <button
            className="small ui green button"
            onClick={props.onButtonClick}>
            {props.num}
        </button>
    );
}

export default Place;