import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import Navbar from "../Navbar";
import { Data } from "../Context/Data";
import { TrendingData } from "../Context/TrendingData";
import { FavouriteData } from "../Context/FavContext";

const Home = () => {
  return (
    <Data>
      <TrendingData>
        <FavouriteData>
          <div className="h-full w-screen fixed bg-gray-300  -z-10"> </div>
          <div className=" flex items-center flex-col h-full">
            <div className="h-full w-full flex items-center flex-col ">
              <Outlet />
            </div>
            <Logo />
            <Navbar />
          </div>
        </FavouriteData>
      </TrendingData>
    </Data>
  );
};

export default Home;
