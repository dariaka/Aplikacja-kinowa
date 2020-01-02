import './AvailableShowtimes.css';
import React from 'react';
import Button from './Button';

const goToReservationPanel = () => {
    console.log("Go to reservation panel");
}

function AvailableShowtimes() {
    return (
        <div className="wrapper">
            AvailableShowtimes 
            <Button text={'Test content'} onButtonClick={goToReservationPanel} />
        </div>
    );
}

export default AvailableShowtimes;