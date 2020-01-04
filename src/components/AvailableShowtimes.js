import './AvailableShowtimes.css';
import React from 'react';
import Button from './Button';

const moment = require('moment');

const goToReservationPanel = () => {
    console.log("Go to reservation panel");
}

function AvailableShowtimes(props) {
    const renderedList = props.sessions.map(session => {
        const time = moment(session.time, "dddd, MMMM Do YYYY, HH:mm").format('HH:mm');
        return (
                <Button 
                key={session.id}
                text={time} 
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