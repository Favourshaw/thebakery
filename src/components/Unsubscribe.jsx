import React from "react";
import NewsL from "../assets/img/newsletter.png";
import NewsLx from "../assets/img/newsletterx.png";
import TwitterD from "../assets/img/twitterdark.svg";
import InstaD from "../assets/img/instadark.svg";
import TeleD from "../assets/img/teledark.svg";

const Unsubscribe = () => {
  return (
    <div className="card">
      <div className="cardBody">
        <div className="newsFlex">
          <div className="newsHead">
            <picture>
              <source media="(min-width:750px)" srcset={NewsLx} />
              <img src={NewsL} alt="" srcset="" className="heroLogo" />
            </picture>
          </div>
          <div>
            <div>
              <h1 className="header">
                UNSUBSCRIBE <br /> FROM OUR NEWSLETTER
              </h1>
            </div>
            <hr />
            <br />
            <div className="nlTextbox">
              <p>We Hope To See You Soon!</p>
            </div>
            <form action="hyp/unsubscribe.php" method="post">
              <div className="inputs">
                <input
                  type="text"
                  name="email"
                  id=""
                  className="inpts"
                  placeholder="Enter email here"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="UNSUBSCRIBE"
                  class="sbmt"
                  name="submit"
                />
              </div>
            </form>
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
  );
};

export default Unsubscribe;
