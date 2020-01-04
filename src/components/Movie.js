import './Movie.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import AvailableShowtimes from './AvailableShowtimes';

function Movie({movie, onSessionClick}) {
    return (
        <div className="wrapper">
            Movie
            <MovieInfo title={movie.title} summary={movie.summary} image={movie.image} />
            <AvailableShowtimes sessions={movie.sessions} onSessionClick={onSessionClick} />
        </div>
    );
}

export default Movie;