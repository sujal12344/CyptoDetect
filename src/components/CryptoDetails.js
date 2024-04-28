import React, { useContext, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { BiDownArrow } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsReddit, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

import CryptoChart from "./CryptoChart";
import { Cryptodata } from "./Context/Data";

const CryptoDetails = () => {
  let { fetchModalCoin, Coin, currency } = useContext(Cryptodata);
  let navigate = useNavigate();
  const { Coinid } = useParams();
  useLayoutEffect(() => {
    fetchModalCoin(Coinid);
  }, [Coinid]);

  return ReactDOM.createPortal(
    <div
      onClick={() => {
        navigate("..");
      }}
      className="h-full w-full z-20  fixed top-0 bg-gray-200 bg-opacity-10  backdrop-blur-md flex items-center justify-center font-nunito"
    ></div>,
    document.getElementById("modal")
  );
};

export default CryptoDetails;
