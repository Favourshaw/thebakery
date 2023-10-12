import React from "react";
import Step1 from "../assets/img/howto/step1.svg";
import Step1L from "../assets/img/howto/step1.png";
import Step2 from "../assets/img/howto/step2.svg";
import Step2L from "../assets/img/howto/step2.png";
import Step3 from "../assets/img/howto/step3.svg";
import Step3L from "../assets/img/howto/step3.png";
import Step4 from "../assets/img/howto/step4.svg";
import Step4L from "../assets/img/howto/step4.png";
import "../assets/styles/how.css";
import NavHow from "./NavHow";
import Subscribe from "./Subscribe";
import Socials from "./Socials";

const How = () => {
  return (
    <div className="">
      <div>
        <NavHow name="How It Works" />
      </div>
      <div className="cardC">
        <div className="howCard">
          <div className="howCardBody">
            <p className="howTitle">How it works</p>
            <div className="howContainerLeft">
              <div className="item1">
                <p>Sign Up for "The Bakery" Forex Signal Group</p>
              </div>
              <div className="item2">
                <div className="howImage">
                  <picture>
                    <source media="(min-width:750px)" srcset={Step1L} />
                    <img src={Step1} alt="step1" className="stepImg" />
                  </picture>
                </div>
              </div>
              <div className="item3">
                - Visit our website and click on the "Subscribe" button.
              </div>
              <div className="item4">
                <div className="howStepContainer">
                  <p className="howStep1">
                    STEP <br />
                    <span className="howStep2">01</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="howContainerRight">
              <div className="item1">
                <p>Receive Welcome Email and Access Details</p>
              </div>
              <div className="item2">
                <div className="howImage">
                  <picture>
                    <source media="(min-width:750px)" srcset={Step2L} />
                    <img src={Step2} alt="step1" className="stepImg" />
                  </picture>
                </div>
              </div>
              <div className="item3">
                - Check your email for a welcome message from "The Bakery."{" "}
                <br />- This email will contain a link to our telegram group.
              </div>
              <div className="item4">
                <div className="howStepContainer">
                  <p className="howStep1">
                    STEP <br />
                    <span className="howStep2">02</span>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="howContainerLeft">
              <div className="item1">
                <p>Receive Welcome Email and Access Details</p>
              </div>
              <div className="item2">
                <div className="howImage">
                  <picture>
                    <source media="(min-width:750px)" srcset={Step3L} />
                    <img src={Step3} alt="step1" className="stepImg" />
                  </picture>
                </div>
              </div>
              <div className="item3">
                - Check your email for a welcome message from "The Bakery."
                <br />- This email will contain a link to our telegram group.
              </div>
              <div className="item4">
                <div className="howStepContainer">
                  <p className="howStep1">
                    STEP <br />
                    <span className="howStep2">03</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="howContainerRight">
              <div className="item1">
                <p>Join the Discord Channel</p>
              </div>
              <div className="item2">
                <div className="howImage">
                  <picture>
                    <source media="(min-width:750px)" srcset={Step4L} />
                    <img src={Step4} alt="step1" className="stepImg" />
                  </picture>
                </div>
              </div>
              <div className="item3">
                - Download the Discord app if you don't have it already.
                <br />
                - Click on the provided link in the welcome email to join our
                private Discord channel.
                <br />- This is where you'll receive real-time market insights
                and trading signals.
              </div>
              <div className="item4">
                <div className="howStepContainer">
                  <p className="howStep1">
                    STEP <br />
                    <span className="howStep2">04</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="howSub">
          <Subscribe />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default How;
