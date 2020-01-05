import "./PlacesGrid.css";
import React from "react";
import Place from "./Place";
import { settings } from "../db";

//  {row: 2, place: 8},

const switchPlaceReservation = seat => {
  console.log("Switch place reservation");
};

class PlacesGrid extends React.Component {
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
  // dostaje w propsach informację o ilości rzędów, ilości siedzeń w rzędzie, lokalizacji zajętych miejsc
  //Zajęte miejsce oznaczamy przez obiekt z kluczem rząd i miejsce.
  //  do każdego siedzenia przypisujemy props z numerem rzędu i miejsca oraz flagę zajęte- true / false, jeżeli miesjce znajduje się na liście zajętych
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

          {/* <div className="doubling ten column centered row">
                    <div className="column">
                        {this.props.seat.map(seat => (
                            <div
                                className={
                                    this.props.reserved.indexOf(seat) > -1
                                        ? "reserved"
                                        : "available"
                                }
                                key={seat}
                                onClick={e => this.onClickSeat(seat)}
                            >
                                <Place num={"r:" + seat.row + " s:" + seat.place} />
                            </div>
                        ))}
                    </div>
                </div> */}

          {/* <div className="ten column centered row">{this.props.seat.map(row) => 
                    <div className="column">
                        <Place num={"01"} onButtonClick={switchPlaceReservation} />
                    </div>
                }
                  
                </div> */}
        </div>
      </div>
    );
  }
}

export default PlacesGrid;
