import './InfoPanel.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import Button from './Button';

function InfoPanel(props) {
        return (
            <div className="wrapper">
                {props.session.time.format('dddd HH:mm')}
                <MovieInfo 
                    title={props.movie.title}
                    image={props.movie.image}
                    summary={props.movie.summary}
                />
                <p>
                    {props.reservedSeats.length} seats selected.
                </p>
                <Button 
                   text={'Submit'} 
                   active={true} 
                   onButtonClick={() => props.onOrderSubmit(props.reservedSeats)} 
                />
            </div>
        );
}

export default InfoPanel;
