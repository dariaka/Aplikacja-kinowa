import './Button.css';
import React from 'react';

function Button(props) {
    return (
        <button
            className="medium ui orange button"
            onClick={props.onButtonClick}>
            {props.text}
        </button>
    );
}

export default Button;
