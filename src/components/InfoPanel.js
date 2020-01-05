import './InfoPanel.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import Button from './Button';

class InfoPanel extends React.Component {
    makeReservation = () => {
        console.log('Make reservation');
        this.props.onSubmit();
    };

    render() {
        return (
            <div className="wrapper">
                InfoPanel
                <MovieInfo />
                <Button text={'Submit'} active={true} onButtonClick={this.makeReservation} />
            </div>
        );
    }
}

export default InfoPanel;
