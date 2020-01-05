import './InfoPanel.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import Button from './Button';

function InfoPanel(props) {
    return (
        <div className="ui grid">
            <div className="row">
                <MovieInfo
                    title={props.movie.title}
                    image={props.movie.image}
                    summary={props.movie.summary}
                    isVertical={true}
                />
            </div>

            <div style={{ padding: '0' }}>
                <h4>{props.session.time.format('dddd HH:mm')}</h4>
                <p>{props.seats.length} seats selected.</p>
            </div>

            <div className="row">
            <Button
                    text={'Back to Repertoire'}
                    active={true}
                    color={'#999'}
                    onButtonClick={props.onBackButtonClick}
                />
                <Button
                    text={'Submit'}
                    active={props.seats.length ? true : false}
                    onButtonClick={() => props.onOrderSubmit(props.seats)}
                />
            </div>
        </div>
    );
}

export default InfoPanel;
