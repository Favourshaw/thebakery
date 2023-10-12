import React from "react";
import Nav1 from "./Nav1";
import contactImg from "../assets/img/contact/contactimg.png";
import contactImgS from "../assets/img/contact/contactimgsm.png";
import Twitter from "../assets/img/twitter.svg";
import Insta from "../assets/img/insta.svg";
import Tele from "../assets/img/tele.svg";
import TwitterD from "../assets/img/twitterdark.svg";
import InstaD from "../assets/img/instadark.svg";
import TeleD from "../assets/img/teledark.svg";
import "../assets/styles/about.css";
import "../assets/styles/contact.css";
const Contact = () => {
  return (
    <div className="">
      <Nav1 name="Contact Us" />

      <div className="abtCard">
        <div className="abtCardBody">
          <p className="howTitle">Contact Us</p>
          <div className="contactBlur">
            <div className="contactCard">
              <div className="abtImg left">
                <picture>
                  <source media="(min-width:900px)" srcset={contactImg} />
                  <img src={contactImgS} alt="step1" className="contactImg" />
                </picture>
              </div>
              <div className="right">
                <div className="abtHead">
                  <p>
                    Feel free to contact us anytime. We will get back to you as
                    soon as we can!
                  </p>
                </div>
                <div className="inputs">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="inpts"
                    placeholder="Name"
                  />
                </div>
                <div className="inputs">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="inpts"
                    placeholder="Email"
                  />
                </div>

                <div className="inputs">
                  <textarea
                    type="text"
                    name=""
                    id=""
                    className="inpts"
                    placeholder="Message"
                  />
                </div>
                <div>
                  <input type="button" value="SUBSCRIBE" class="sbmt" />
                </div>
              </div>
            </div>
            <div className=" sla">
              <div>
                <a>
                  <img src={TwitterD} alt="twitter" />
                </a>
              </div>
              <div>
                <a>
                  <img src={InstaD} alt="insta" />
                </a>
              </div>
              <div>
                <a>
                  <img src={TeleD} alt="tele" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Contact;
