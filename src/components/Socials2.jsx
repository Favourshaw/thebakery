import React from "react";
import Twitter from "../assets/img/twitter.svg";
import Insta from "../assets/img/insta.svg";
import Discord from "../assets/img/discord.svg";

const Socials2 = () => {
  return (
    <div className="socialsContainer2">
      <div className="socials">
        <div>
          <a href="https://x.com/thefxbakery?s=21">
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
        <div>
          <a href="https://instagram.com/thebak.ery">
            <img src={Insta} alt="insta" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={Discord} alt="tele" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials2;
