import React from "react";
import Logo from "../assets/bakerylogo.png";
import LogoX from "../assets/bakerylogox.png";
import HeroLogosm from "../assets/herologosm.png";
import HeroLogox from "../assets/herologox.png";
import Ham from "../assets/img/ham.svg";
import HamX from "../assets/img/hamx.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/about.css";
import "../assets/styles/contact.css";
import "../assets/styles/navhome.css";
import NavMenu from "./NavMenu";

const NavHow = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div
      className={
        isNavExpanded ? "backgroundImg expanded" : "backgroundImg altBg"
      }
    >
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
              <img src={isNavExpanded ? HamX : Ham} alt="" srcset="" />
            </button>
          </div>
          <div className={isNavExpanded ? "navRight expanded" : "navRight"}>
            <NavMenu />
          </div>
        </div>
      </div>
      <div className="heroHome">
        <div className="heroImgContainer">
          <picture>
            <source media="(min-width:750px)" srcset={HeroLogox} />
            <img src={HeroLogosm} alt="" className="heroLogo" />
          </picture>
        </div>

        <div>
          <p className="howHeroHead">{props.name}</p>
          <hr className="howHr" />
        </div>
      </div>
    </div>
  );
};

export default NavHow;
