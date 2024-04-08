import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="md:w-[45%] w-[90%] mt-10 md:mt-0 text-md  absolute    font-semibold top-14 rounded-lg font-nunito border h-4 flex justify-evenly   border-green text-gray-100 items-center py-6">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `rounded-[0.3rem] w-[30%] text-center  ${
            isActive
              ? "bg-[#90EE90] text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-green"
          }`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `rounded-[0.3rem] w-[30%] text-center ${
            isActive
              ? "bg-[#90EE90] text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-green"
          }`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/favourites"
        className={({ isActive }) => {
          return `rounded-[0.3rem] w-[30%] text-center ${
            isActive
              ? "bg-[#90EE90] text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-green"
          }`;
        }}
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navbar;
