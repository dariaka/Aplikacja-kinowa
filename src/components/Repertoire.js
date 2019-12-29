import React from "react";
import MovieList from "./MovieList";
const moment = require("moment");

const Repertoire = ({ movies }) => {
  // ToDo: onDayClicked()
  //
  // const moviesForDay;
  // //ToDo: complete
  // function onDayClicked(dayOfWeek) {
  //   //ToDo: add day of week handling
  //   moviesForDay = movies;
  // }

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="eight column centered row">
          <div className="ui text menu" style={{ padding: "40px 0" }}>
            <div className="header item" style={{ fontSize: "1.25em" }}>
              Repertoire
            </div>
            <div className="ui orange text right menu">
              <a
                // ToDo: onClick={() => onDayClicked("Monday")}
                className="active item"
              >
                Today
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(1, "days")
                  .format("dddd")}
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(2, "days")
                  .format("dddd")}
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(3, "days")
                  .format("dddd")}
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(4, "days")
                  .format("dddd")}
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(5, "days")
                  .format("dddd")}
              </a>
              <a style={{ paddingLeft: "20px" }} className="item">
                {moment()
                  .add(6, "days")
                  .format("dddd")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* ToDo: change to moviesForDay */}
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Repertoire;
