import './MovieInfo.css';
import React from 'react';

function MovieInfo({ title, summary, image }) {
    return (
        <div className="wrapper">
            <h4>{title}</h4>
            <p>{summary}</p>
            <img className="ui small image" src={image} alt={title} />
        </div>
    );
}

export default MovieInfo;
