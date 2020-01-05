import "./PlacesSelectionPanel.css";
import React from "react";
import PlacesGrid from "./PlacesGrid";
import { settings } from "../db";

class PlacesSelectionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seat: [],
      seatAvailable: [],
      seatReserved: []
    };

    for (var rowIndex = 1; rowIndex <= settings.rows; rowIndex++) {
      for (var placeIndex = 1; placeIndex <= settings.places; placeIndex++) {
        this.state.seat.push({ row: rowIndex, place: placeIndex });
      }
    }
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      });
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui centered grid">
          <div className="row">
            <div
              className="center aligned ten wide column"
              style={{
                backgroundColor: "#C4C4C4",
                textTransform: "uppercase",
                fontSize: "1em",
                padding: "4px 0",
                marginTop: "40px"
              }}
            >
              Screen
            </div>
          </div>
        </div>
        <div>
          <PlacesGrid
            seat={this.state.seat}
            available={this.state.seatAvailable}
            reserved={this.state.seatReserved}
            selectedSession={this.props.selectedSession}
            onClickData={this.onClickData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default PlacesSelectionPanel;
