import './Repertoire.css';
import React from 'react';
import MoviesList from './MoviesList';

function Repertoire(props) {
    return (
        <div className="wrapper">
            Repertoire
            <MoviesList movies={props.movies} onSessionClick={props.onSessionClick} />
        </div>
    );
}

export default Repertoire;
