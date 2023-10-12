import React from "react";
import Logo from "../assets/bakerylogo.png";
import LogoX from "../assets/bakerylogox.png";
import Ham from "../assets/img/ham.svg";
import HamX from "../assets/img/hamx.svg";
import { useState } from "react";

import "../assets/styles/about.css";
import "../assets/styles/contact.css";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Nav1 = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className={isNavExpanded ? "backgroundImg expanded" : "backgroundImg"}>
      <div className="nav">
        <div>
          <div className="navLeft">
            <Link to="/">
              <picture>
                <source media="(min-width:750px)" srcset={LogoX} />
                <img src={Logo} alt="logo" className="" />
              </picture>
            </Link>
          </div>
          <div>
            <button
              className="ham"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <img src={isNavExpanded ? HamX : Ham} />
            </button>
          </div>
          <div className={isNavExpanded ? "navRight expanded" : "navRight"}>
            <NavMenu />
          </div>
        </div>
      </div>
      <div className="hero">
        <div>
          <p className="abtHeroHead">{props.name}</p>
          <hr className="abtHr" />
        </div>
      </div>
    </div>
  );
};

export default Nav1;
