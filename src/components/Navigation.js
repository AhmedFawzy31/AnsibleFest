import React from "react";
import logo from "../assets/images/logo.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Navigation = () => {
  //find what page we are on
  const { pathname } = useLocation();
  const isEvent = pathname.includes("/event/");
  return (
    <nav className={`pt-[77px] ${isEvent ? "px-[25px]" : ""}`}>
      <div className={`container ${isEvent ? "" : "px-[25px]"}`}>
        <Link to={"/"}>
          <img
            className={`max-w-[141px] ${isEvent ? "" : "m-auto"} lg:m-0`}
            alt="nav logo"
            src={logo}
          ></img>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
