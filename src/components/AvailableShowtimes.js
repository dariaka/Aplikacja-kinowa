import './AvailableShowtimes.css';
import React from 'react';
import Button from './Button';

const moment = require('moment');

class AvailableShowtimes extends React.Component {

    goToReservationPanel = (movie, session) => {
        this.props.onSessionClick(movie, session);
    }

    renderedList = this.props.sessions.map(session => {
        return (
            <Button 
                key={session.id}
                text={session.time.format('HH:mm')} 
                onButtonClick={() => this.goToReservationPanel(this.props.movie, session)} 
            />
        );
    })

    render() {
        return (
            <div className="wrapper">
                {this.renderedList}
            </div>
        );
    }
}

export default AvailableShowtimes;