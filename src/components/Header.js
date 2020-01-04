import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    return ( <
      div className = "ui container" >
      <
      div className = "ui grid" >
      <
      div className = "content-header content sixteen wide column" >
      <
      div className = "cinema-header ui sub header" > Cinema < /div> <
      div className = "app-header" > App < /div> <
      /div> <
      /div> <
      /div>
    );
}

export default Header;