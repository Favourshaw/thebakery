import React from "react";
import Twitter from "../assets/img/twitter.svg";
import Insta from "../assets/img/insta.svg";
import Tele from "../assets/img/tele.svg";

const Socials = () => {
  return (
    <div className="socialsContainer">
      <div className="socials">
        <div>
          <a>
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <div>
          <a>
            <img src={Insta} alt="insta" />
          </a>
        </div>
        <div>
          <a>
            <img src={Tele} alt="tele" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
