import './MovieInfo.css';
import React from 'react';

function MovieInfo(props) {
    return (
        <div className="wrapper">
            MovieInfo: {props.title}
        </div>
    );
}

export default MovieInfo;