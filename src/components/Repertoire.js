import React from "react";
const moment = require("moment");

// import MovieList from "./MovieList";

const Repertoire = ({ movies, onDaySelect }) => {
  return (
    <div className="ui grid">
      <div
        className="eight column centered row"
        style={{ margin: "25px 80px" }}
      >
        <div className="ui text menu" style={{ margin: "0" }}>
          <div className="header item" style={{ padding: "20px 0" }}>
            Repertoire
          </div>
          <div className="right menu">
            <a
              href=""
              style={{ paddingLeft: "20px" }}
              className="orange active item"
            >
              {moment().format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(1, "days")
                .format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(2, "days")
                .format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(3, "days")
                .format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(4, "days")
                .format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(5, "days")
                .format("dddd")}
            </a>
            <a href="" style={{ paddingLeft: "20px" }} className="item">
              {moment()
                .add(6, "days")
                .format("dddd")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repertoire;
