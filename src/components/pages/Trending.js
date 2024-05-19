import React, { useContext } from "react";
import TrendingGraph from "../TrendingGraph";
import { Outlet } from "react-router-dom";
import { Trendingdata } from "../Context/TrendingData";

const Trending = () => {
  const { TrendData } = useContext(Trendingdata);

  return (
    <>
      <div className="  border h-[80vh] w-[85vw] relative top-40 ">
        {TrendData ? (
          <>
            <TrendingGraph />
            <Outlet />{" "}
          </>
        ) : (
          <>
            <div className="w-full h-full flex items-center justify-center ">
              <div className="w-20 h-20 border-4 border-grecyan rounded-full border-b-gray-200 animate-spin"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trending;
