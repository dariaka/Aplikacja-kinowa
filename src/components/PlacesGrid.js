import "./PlacesGrid.css";
import React from "react";
import Place from "./Place";

const switchPlaceReservation = () => {
  console.log("Switch place reservation");
};

class PlacesGrid extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui centered grid">
          <div className="ten column centered row">
            <div className="column">
              <Place num={"01"} onButtonClick={switchPlaceReservation} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlacesGrid;
