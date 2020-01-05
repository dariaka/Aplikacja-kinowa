import "./OrderPanel.css";
import React from "react";
import InfoPanel from "./InfoPanel";
import PlacesSelectionPanel from "./PlacesSelectionPanel";

function OrderPanel(props) {
  return (
    <div className="ui container">
      <div className="ui text menu" style={{ paddingTop: "40px" }}>
        <div className="header item" style={{ fontsize: "1.25em" }}>
          Booking
        </div>
      </div>
      <div className="ui grid">
        <div className="six wide column">
          <div>
            <InfoPanel onSubmit={props.onOrderSubmit} />
          </div>
        </div>
        <div className="ten wide column">
          <div className="column">
            <h3 className="red">Select seats</h3>
            {/* <p>Please select seats / 4 seats selected!</p> */}
            <div className="ui divider"></div>
          </div>
          <div className="ui four column grid">
            <div className="row">
              <div className="column">
                <i className="square full green icon"></i>
                Available
              </div>
              <div className="column">
                <i className="square full grey icon"></i>
                Unavailable
              </div>
              <div className="column">
                <i className="square full orange icon"></i>
                Your choice
              </div>
            </div>
          </div>
          <div>
            <PlacesSelectionPanel selectedSession={props.selectedSession} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPanel;
