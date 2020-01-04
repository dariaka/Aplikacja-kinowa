import './Movie.css';
import React from 'react';
import MovieInfo from './MovieInfo';
import AvailableShowtimes from './AvailableShowtimes';

function Movie(props) {
    return (
        <div className="wrapper">
            Movie
            <MovieInfo 
                title={props.movie.title} 
                summary={props.movie.summary} 
                image={props.movie.image} 
            />
            <AvailableShowtimes 
                movie={props.movie} 
                sessions={props.sessions} 
                onSessionClick={props.onSessionClick} 
            />
        </div>
    );
}

export default Movie;