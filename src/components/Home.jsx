import React from "react";
import NavHome from "./NavHome";
import Subscribe from "./Subscribe";
import Socials from "./Socials";

const Home = () => {
  return (
    <div className="">
      <div className="home">
        <NavHome />
      </div>
      <div className="cardC">
        <Subscribe />
        <Socials />
      </div>
    </div>
  );
};

export default Home;
