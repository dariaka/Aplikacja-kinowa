import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div
          className="content four wide column"
          style={{
            maxWidth: "170px",
            marginTop: "20px",
            fontFamily: "'Roboto', sans - serif",
            letterSpacing: "- 1.5%",
            fontWeight: "bold",
            lineHeight: "0.6",
            textTransform: "uppercase",
            textAlign: "right"
          }}
        >
          <div
            className="ui sub orange header"
            style={{
              fontSize: "2.5em"
            }}
          >
            Cinema
          </div>
          App
        </div>
      </div>
    );
  }
}

export default Header;
