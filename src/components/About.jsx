import React from "react";
import Nav1 from "./Nav1";
import abtImg from "../assets/img/about/abtimg.png";
import abtImgS from "../assets/img/about/abtimgsm.png";
import "../assets/styles/about.css";
import Socials2 from "./Socials2";
import SocialLinkX from "./molecules/SocialLinkX";
const About = () => {
  return (
    <div className="colorBg">
      <Nav1 name="About Us" />
      <div className="abtCard">
        <div className="abtCardBody">
          <p className="howTitle">How it works</p>
          <div className="abtHead">
            <p>
              At The Bakery, we are your trusted partner in the world of forex
              trading. With a wealth of experience and expertise, we specialize
              in providing cutting-edge forex trading signals and invaluable
              market insights. Our dedicated team of analysts works tirelessly
              to deliver real-time information and actionable recommendations,
              empowering you to make informed trading decisions. But we're not
              just about signals; we prioritize your success by offering
              comprehensive risk management strategies, ensuring your
              investments are safeguarded in this dynamic market.
            </p>
          </div>
          <div className="abtImg">
            <picture>
              <source media="(min-width:700px)" srcset={abtImg} />
              <img src={abtImgS} alt="step1" className="abtImg" />
            </picture>
          </div>

          <div className="abtHead">
            <p>
              With a commitment to transparency, accuracy, and your financial
              well-being, The Bakery is here to help you navigate the forex
              market with confidence and precision. Your success is our mission.
            </p>
          </div>
          <SocialLinkX />
        </div>
        <Socials2 />
      </div>
    </div>
  );
};

export default About;
