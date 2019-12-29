import React from "react";

const MovieItem = ({ movie }) => {
  return (
    // Free to change
    <div className="ui vertically divided grid">
      <div className="ui segment">
        <div className="ui two column padded grid">
          <div className="column">
            <div className="ui two column grid">
              {/* Movie description */}
              <div className="column">
                <img
                  className="ui small image"
                  src={movie.image}
                  alt={movie.title}
                />
              </div>

              <div className="column">
                <div className="header">{movie.title}</div>
                <p className="summary">{movie.summary}</p>
              </div>
            </div>
          </div>

          {/* Sessions for this movie */}
          <div className="column">Sessions</div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
