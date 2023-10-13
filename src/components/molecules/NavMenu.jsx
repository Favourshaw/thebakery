import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="navM" to="/how">
            How it works
          </Link>
        </li>
        <li>
          <Link to="/about">About Us </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
