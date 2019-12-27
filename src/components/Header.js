import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="content">
          <div className="ui sub header">Cinema</div>
          <div className="app-header">App</div>
        </div>
      </div>
    );
  }
}

export default Header;
