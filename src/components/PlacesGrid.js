import "./PlacesGrid.css";
import React from "react";
import Place from "./Place";
import { settings } from "../db";

const switchPlaceReservation = seat => {
  console.log("Switch place reservation");
};

class PlacesGrid extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.selectedSession !== undefined) {
      console.log(
        "selected session is: " +
          JSON.stringify(this.props.selectedSession.seatsBooked)
      );
    }
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }

  render() {
    return (
      <div className="container">
        <div className="grid">
          <table>
            <tbody>
              <tr>
                {this.props.seat.map(seat => (
                  <td
                    className={
                      //todo complete checking selectedSession and all cinema's hall places
                      this.props.reserved.indexOf(seat) > -1
                        ? "reserved"
                        : "available"
                    }
                    key={seat}
                    onClick={e => this.onClickSeat(seat)}
                  >
                    <Place num={"r:" + seat.row + " s:" + seat.place} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlacesGrid;
