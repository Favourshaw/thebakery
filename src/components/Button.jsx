import React from "react";
import Ham from "../assets/img/ham.svg";

function Button(props) {
  return (
    <div>
      <button className="ham" onClick={props.handleClick}>
        <img src={Ham} alt="" srcset="" />
      </button>
    </div>
  );
}

export default Button;
