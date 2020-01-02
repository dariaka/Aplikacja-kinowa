import './InfoPanel.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import Button from './Button';

const makeReservation = () => {
    console.log("Make reservation");
}

function InfoPanel() {
    return (
        <div className="wrapper">
            InfoPanel
            <MovieInfo />
            <Button text={'Test content'} onButtonClick={makeReservation} />
        </div>
    );
}

export default InfoPanel;