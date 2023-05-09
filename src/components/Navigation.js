import React from "react";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <nav className="pt-[77px]">
      <div className="container lg:px-[25px]">
        <img
          className="max-w-[141px] m-auto lg:m-0"
          alt="nav logo"
          src={logo}
        ></img>
      </div>
    </nav>
  );
};

export default Navigation;
