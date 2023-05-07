import React from "react";
import logo from "../assets/images/logo.svg";

const Navigation = () => {
  return (
    <nav className="flex justify-center pt-[77px]">
      <img className="max-w-[141px]" alt="nav logo" src={logo}></img>
    </nav>
  );
};

export default Navigation;
