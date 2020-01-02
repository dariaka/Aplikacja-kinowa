import './Movie.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import AvailableShowtimes from './AvailableShowtimes';

function Movie() {
    return (
        <div className="wrapper">
            Movie
            <MovieInfo />
            <AvailableShowtimes />
        </div>
    );
}

export default Movie;