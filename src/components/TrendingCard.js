import React, { useContext } from "react";
import { Trendingdata } from "./Context/TrendingData";
import { useNavigate } from "react-router-dom";

const TrendingCard = () => {
  const navigate = useNavigate();
  const { TrendData } = useContext(Trendingdata);

  return (
    <div className="border- flex border-red w-full h-full overflow-x-auto overflow-y-hidden sm:overflow-y-auto">
      {TrendData.coins.map((val) => {
        return (
          <div
            onClick={() => {
              navigate(`${val.item.id}`);
            }}
            key={val.item.id}
            className="h-3/4  my-auto cursor-pointer shadow-green shadow-lg hover:scale-110 bg-gray-300 mx-2  border border-grecyan sm:w-[320px] md:w-[240px] lg:w-[300px] xl:w-[320px]"
          >
            <img className="mx-auto my-4" src={val.item.small} alt="" />
            <h2 className=" text-white font-bold font-nunito text-[19px] text-center">
              {val.item.name}
            </h2>
            <h3 className="hidden md:block text-white font-mono font-semibold text-base my-1">
              Price : {Number(val.item.price_btc).toPrecision(3)}
            </h3>
            <h3 className="hidden md:block text-white font-mono my-2">
              Market Cap : {Number(val.item.market_cap_rank).toPrecision(3)}
            </h3>
            <h3 className="hidden md:block text-white font-mono">
              Coin ID : {val.item.coin_id}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default TrendingCard;
