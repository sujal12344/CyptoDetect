import React from "react";
import { Link } from "react-router-dom";
import Logoimg from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="max-h-full max-w-full absolute top-7  left-10 flex items-center flex-row  ">
      <Link to="/ ">
        <img src={Logoimg} alt="" className="w-10" />
      </Link>
      <div className="text-lg font-nunito  text-[#90EE90]">CryptoDetect</div>
    </div>
  );
};

export default Logo;
