import './AvailableShowtimes.css';
import React from 'react';
import Button from './Button';

const moment = require('moment');

const goToReservationPanel = () => {
    console.log("Go to reservation panel");
}

function AvailableShowtimes(props) {
    const renderedList = props.sessions.map(session => {
        return (
                <Button 
                key={session.id}
                text={session.time.format('HH:mm')} 
                onButtonClick={goToReservationPanel} />
        );
    })

    return (
        <div className="wrapper">
            {renderedList}
        </div>
    );
}

export default AvailableShowtimes;