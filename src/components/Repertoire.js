import './Repertoire.css';
import React from 'react';
import MoviesList from './MoviesList';

const moment = require('moment');

function Repertoire({movies, onSessionClick, onDaySelect}) {
    const days = [
        moment(),
        moment().add(1, "days"),
        moment().add(2, "days"),
        moment().add(3, "days"),
        moment().add(4, "days"),
        moment().add(5, "days"),
        moment().add(6, "days")];

    const renderedList = days.map((day, id) => {
        return (
            <a key={id}
                onClick={() => onDaySelect(day)}
                className="item"
                style={{ paddingLeft: "20px" }} >
                {id===0?day.format("[Today]"):day.format("dddd")}
            </a>
        );
    })
    
    return (
    <div className="ui container">
      <div className="ui grid">
        <div className="eight column centered row">
          <div className="ui text menu" style={{ padding: "40px 0" }}>
            <div className="header item" style={{ fontSize: "1.25em" }}>
              Repertoire
            </div>
            <div className="ui orange text right menu">
              {renderedList}
            </div>
          </div>
        </div>
      </div>

      <div>
        <MoviesList movies={movies} onSessionClick={onSessionClick}/>
      </div>
    </div>
  );
};

export default Repertoire;