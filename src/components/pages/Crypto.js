import React from "react";
import Table from "../Table";
import Filters from "../Filters";
import Pagination from "../Pagination";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const Crypto = () => {
  return (
    <>
      <Filters />
      <Table />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-[85vw]  md:h-64 md:top-60 top-72 relative text-white">
        <div className="flex md:block space-x-2 mb-2">
          <span>
            {"Powered by "}
            <a
              href="https://www.coingecko.com/"
              rel="noreferrer"
              target={"_blank"}
              className="text-green text-base font-nunito font-bold"
            >
              CoinGecko
            </a>
          </span>
          <div className="flex">
            <a href="http://github.com/DhrishP" target={"_blank"}>
              <AiFillGithub className="w-6 h-6 text-grecyan " />
            </a>
            <a href="" target={"_blank"}>
              {" "}
              <AiFillLinkedin className="w-6 h-6 text-grecyan ml-2" />
            </a>
          </div>
        </div>
        <Outlet />

        <Pagination />
      </div>
    </>
  );
};

export default Crypto;
