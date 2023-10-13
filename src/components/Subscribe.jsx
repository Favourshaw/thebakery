import React from "react";
import NewsL from "../assets/img/newsletter.png";
import NewsLx from "../assets/img/newsletterx.png";
import SocialLinkX from "./molecules/SocialLinkX";

const Subscribe = () => {
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
                SUBSCRIBE <br /> TO OUR NEWSLETTER
              </h1>
              <hr />
              <br />
            </div>

            <div className="nlTextbox">
              <p>
                Subscribe to Our Newsletter for
                <span className="break">
                  <br />
                </span>{" "}
                Exclusive Market Updates, Trading Tips, and Financial Insights!
              </p>
            </div>
            <form action="hyp/subscribe.php" method="post">
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
                  value="SUBSCRIBE"
                  class="sbmt"
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
        <SocialLinkX />
      </div>
    </div>
  );
};

export default Subscribe;
