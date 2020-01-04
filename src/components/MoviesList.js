import './MoviesList.css';
import React from 'react';
import Movie from './Movie';

function MoviesList(props) {
    const renderedList = props.movies.map(movie => {
        return (
            <Movie
                key={movie.id}
                movie={movie}
                onSessionClick={props.onSessionClick}
            />
        );
    });

    return <div className="wrapper">{renderedList}</div>;
}

export default MoviesList;
