import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <div>{movie.title}</div>
      <img className="ui small image" src={movie.image} />
    </div>
  );
};

export default MovieItem;
