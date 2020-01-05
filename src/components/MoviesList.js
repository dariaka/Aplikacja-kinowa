import './MoviesList.css';
import React from 'react';
import Movie from './Movie';

function MoviesList(props) {
    const renderedList = props.movies.map(movie => {
        const matchingSessions = props.sessions.filter(session => movie.sessions.includes(session.id));
        const keyFomSessions = matchingSessions.map(session => session.id).reduce((prev, next) => prev+next);
        return (
            <Movie
                key={movie.id+keyFomSessions}
                movie={movie}
                sessions={matchingSessions}
                onSessionClick={props.onSessionClick}
            />
        );
    });

    return <div className="wrapper">{renderedList}</div>;
}

export default MoviesList;
