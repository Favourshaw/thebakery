import React from "react";
import TwitterX from "../../assets/img/twitterdark.svg";
import InstaX from "../../assets/img/instadark.svg";
import DiscordX from "../../assets/img/discorddark.svg";

const SocialLinkX = () => {
  return (
    <div className=" sla">
      <div>
        <a href="https://x.com/thefxbakery?s=21">
          <img src={TwitterX} alt="twitter" />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/thebak.ery">
          <img src={InstaX} alt="insta" />
        </a>
      </div>
      <div>
        <a href="https://discord.gg/RrESG2CN">
          <img src={DiscordX} alt="discord" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinkX;
