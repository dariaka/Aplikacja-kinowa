import React from "react";
const moment = require('moment');

function App() {
    console.log('Moment object with current day and time');
    console.log(moment());

    console.log('Moment object with current day and time set to 16:00');
    console.log(moment().hour(16).minutes(0));

    console.log('Moment object with added 1 day, 3 hours and 15 minutes to the previous time');
    console.log(moment().hour(16).minutes(0).add({ days: 1, hours: 3, minutes: 15 }));

    console.log('Moment object converted to string with nice looking format');
    console.log(moment().hour(16).minutes(0).add({ days: 1, hours: 3, minutes: 15 }).format("dddd, MMMM Do YYYY, h:mm:ss a"));

    return <h1>The cinema app is being built here :)</h1>;
}

export default App;