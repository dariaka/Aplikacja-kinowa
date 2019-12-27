import React from "react";
import Header from "./Header";
import {
  movies,
  sessions
} from "../db";
const moment = require("moment");

function App() {
  console.log("Moment object with current day and time");
  console.log(moment());

  console.log("Moment object with current day and time set to 16:00");
  console.log(
    moment()
    .hour(16)
    .minutes(0)
  );

  console.log(
    "Moment object with added 1 day, 3 hours and 15 minutes to the previous time"
  );
  console.log(
    moment()
    .hour(16)
    .minutes(0)
    .add({
      days: 1,
      hours: 3,
      minutes: 15
    })
  );

  console.log("Moment object converted to string with nice looking format");
  console.log(
    moment()
    .hour(16)
    .minutes(0)
    .add({
      days: 1,
      hours: 3,
      minutes: 15
    })
    .format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  // Check if importing data from db-file works
  // console.log(movies);
  // console.log(sessions);

  return ( <
    div className = "ui container" >
    <
    Header / >
    <
    /div>
  );
}

export default App;