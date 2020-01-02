import './Modal.css';
import React from 'react';
import Button from './Button';

const confirmReservation = () => {
    console.log("Confirm reservation")
};

const rejectReservation = () => {
    console.log("Reject reservation")
};

function Movie() {
    return (
        <div className="wrapper">
            Modal
            <Button text={'Confirm'} onButtonClick={confirmReservation} />
            <Button text={'Reject'} onButtonClick={rejectReservation} />
        </div>
    );
}

export default Movie;
