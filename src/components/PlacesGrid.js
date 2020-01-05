import "./PlacesGrid.css";
import React from "react";
import Place from "./Place";

const switchPlaceReservation = () => {
  console.log("Switch place reservation");
};

class PlacesGrid extends React.Component {
  // dostaje w propsach informację o ilości rzędów, ilości siedzeń w rzędzie, lokalizacji zajętych miejsc
  //Zajęte miejsce oznaczamy przez obiekt z kluczem rząd i miejsce.
  //  do każdego siedzenia przypisujemy props z numerem rzędu i miejsca oraz flagę zajęte- true / false, jeżeli miesjce znajduje się na liście zajętych
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
