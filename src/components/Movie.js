import './Movie.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import AvailableShowtimes from './AvailableShowtimes';

function Movie(props) {
    return (
        <div className="wrapper">
            Movie
            <MovieInfo movie={props.movie} />
            <AvailableShowtimes sessions={props.movie.sessions} onSessionClick={props.onSessionClick} />
        </div>
    );
}

export default Movie;