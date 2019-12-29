import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  const renderList = movies.map(movie => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <div>{renderList}</div>;
};

export default MovieList;
