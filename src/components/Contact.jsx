import React from "react";
import Nav1 from "./Nav1";
import contactImg from "../assets/img/contact/contactimg.png";
import contactImgS from "../assets/img/contact/contactimgsm.png";
import TwitterD from "../assets/img/twitterdark.svg";
import InstaD from "../assets/img/instadark.svg";
import DiscordD from "../assets/img/discorddark.svg";
import "../assets/styles/about.css";
import "../assets/styles/contact.css";
import Socials2 from "./Socials2";
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
                  <source media="(min-width:820px)" srcset={contactImg} />
                  <img src={contactImgS} alt="step1" className="contactImg" />
                </picture>
              </div>
              <div className="right">
                <div className="ContactHead">
                  <p>
                    Feel free to contact us anytime. We will get back to you as
                    soon as we can!
                  </p>
                </div>
                <form action="hyp/contact.php" method="post">
                  <div className="inputsC">
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="inptsC"
                      placeholder="Name"
                    />
                  </div>
                  <div className="inputsC">
                    <input
                      type="text"
                      name="email"
                      id=""
                      className="inptsC"
                      placeholder="Email"
                    />
                  </div>

                  <div className="inputsC">
                    <textarea
                      type="text"
                      name="message"
                      id=""
                      rows="6"
                      className="inptsC"
                      placeholder="Message"
                    />
                  </div>
                  <div className="btn">
                    <input
                      type="submit"
                      value="SEND"
                      className="sbmtC"
                      name="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="sla">
              <div>
                <a href="https://x.com/thefxbakery?s=21">
                  <img src={TwitterD} alt="twitter" />
                </a>
              </div>
              <div>
                <a href="https://instagram.com/thebak.ery">
                  <img src={InstaD} alt="insta" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={DiscordD} alt="tele" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Socials2 />
      </div>
    </div>
  );
};

export default Contact;
