import React from "react";
import Logo from "../images/bloglogo.jpg";

function Footer() {
  return (
    <div className="bg-green-300 p-[20px] mt-[100px] flex justify-between items-center px-10 m-auto text-xs">
      <img className="w-[50px] h-[50px] rounded-full" src={Logo} alt="Logo" />
      <span>Made by sabbir</span>
    </div>
  );
}

export default Footer;
