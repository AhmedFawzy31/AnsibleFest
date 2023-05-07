import React from "react";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <nav className="flex justify-center lg:justify-start pt-[77px]">
      <div className="container lg:px-[25px]">
        <img className="max-w-[141px]" alt="nav logo" src={logo}></img>
      </div>
    </nav>
  );
};

export default Navigation;
