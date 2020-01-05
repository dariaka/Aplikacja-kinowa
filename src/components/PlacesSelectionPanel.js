import "./PlacesSelectionPanel.css";
import React from "react";
import PlacesGrid from "./PlacesGrid";

class PlacesSelectionPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6"
      ],
      seatAvailable: [
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6"
      ],
      seatReserved: []
    };
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
            onClickData={this.onClickData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default PlacesSelectionPanel;
