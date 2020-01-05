import "./AvailableShowtimes.css";
import React from "react";
import Button from "./Button";

class AvailableShowtimes extends React.Component {
  ifActive = time => {
    return !time.fromNow().includes("ago");
  };

  goToReservationPanel = (movie, session) => {
    this.props.onSessionClick(movie, session);
  };

  renderedList = this.props.sessions.map(session => {
    return (
      <Button
        key={session.id}
        text={session.time.format("HH:mm")}
        active={this.ifActive(session.time)}
        onButtonClick={() =>
          this.goToReservationPanel(this.props.movie, session)
        }
      />
    );
  });

  render() {
    return (
      <div className="ui grid" style={{ margin: "40px" }}>
        {this.renderedList}
      </div>
    );
  }
}

export default AvailableShowtimes;
