import React from "react";
import logoChicago from "../assets/images/logoFooter.svg";

const Footer = () => {
  return (
    <div className="pt-[45px] pb-[40px] flex flex-col text-light items-center px-[20px]">
      <div>
        <img
          className="w-[52px] h-[52px]"
          src={logoChicago}
          alt={"footer logo"}
        ></img>
      </div>
      <h2 className="font-bold text-center mt-[10px] text-[12px] leading-[15px]">
        Red Hat Ansible Automation<br></br>Chicago Team
      </h2>
    </div>
  );
};

export default Footer;
