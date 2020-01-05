import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <button
      className="medium ui orange button"
      onClick={props.active ? props.onButtonClick : null}
      style={
        props.active
          ? { background: props.color || "#EB7D18", cursor: "pointer" }
          : { background: "#999", cursor: "default" }
      }
    >
      {props.text}
    </button>
  );
}

export default Button;
