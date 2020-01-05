import "./PlacesSelectionPanel.css";
import React from "react";
import PlacesGrid from "./PlacesGrid";

function PlacesSelectionPanel() {
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
      <PlacesGrid />
    </div>
  );
}

export default PlacesSelectionPanel;
