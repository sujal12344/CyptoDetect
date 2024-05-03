import React, { useContext, useState } from "react";
import { Cryptodata } from "../Context/Data";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../Context/FavContext";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  let { currency } = useContext(Cryptodata);
  const { contextdata } = useContext(FavouriteContext);
  const navigate = useNavigate();

  return (
    <>
      {contextdata ? (
        <>
          <h3 className="text-green relative top-48 font-nunito text-lg font-bold">
            Favourites
          </h3>
          <div className="md:w-[85vw] w-[70vw]  top-48 h-96  relative border border-gray-100">
            <table className="md:w-[85vw] w-[70vw]  relative rounded-t-lg border border-gray-100 table-auto">
              <thead className="text-center text-gray-100 capitalize border border-gray-100">
                <tr className="">
                  <th className="p-3">asset</th>
                  <th className="p-3 hidden sm:table-cell">name</th>
                  <th className="p-3 ">price</th>
                  <th className="p-3 hidden md:table-cell">1H</th>
                  <th className="p-3 hidden md:table-cell">24H</th>
                  <th className="p-3 hidden md:table-cell">7D</th>
                  <th className="p-3 hidden lg:table-cell">total volume</th>
                  <th className="p-3 hidden lg:table-cell">
                    market cap change
                  </th>
                </tr>
              </thead>
              <tbody className="text-center text-white capitalize border font-nunito border-gray-100">
                {contextdata.map((data) => {
                  return (
                    <tr className="border border-gray-100" key={data.id}>
                      <td className="p-4 flex">
                        <FavButton data={data.id} />
                        <div className="">
                          <img
                            src={data.image}
                            alt=""
                            className="w-6 ml-2 h-6"
                          />
                        </div>

                        <Link
                          to={`${data.id}`}
                          className="cursor-pointer uppercase ml-2 font-nunito"
                        >
                          {" "}
                          {data.symbol}
                        </Link>
                      </td>
                      <td className="p-4 hidden sm:table-cell">
                        <Link to={`${data.id}`} className="cursor-pointer">
                          {" "}
                          {data.name}
                        </Link>
                      </td>
                      <td className="p-4 text-grecyan">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(data.current_price)}
                      </td>
                      <td
                        className={
                          data.price_change_percentage_1h_in_currency > 0
                            ? "hidden md:table-cell p-4 text-green"
                            : "hidden md:table-cell p-4 text-red"
                        }
                      >
                        {Number(
                          data.price_change_percentage_1h_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                      <td
                        className={
                          data.price_change_percentage_24h_in_currency > 0
                            ? "hidden md:table-cell p-4 text-green"
                            : "hidden md:table-cell p-4 text-red"
                        }
                      >
                        {Number(
                          data.price_change_percentage_24h_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                      <td
                        className={
                          data.price_change_percentage_7d_in_currency > 0
                            ? "hidden md:table-cell p-4 text-green"
                            : "hidden md:table-cell p-4 text-red"
                        }
                      >
                        {Number(
                          data.price_change_percentage_7d_in_currency
                        ).toFixed(2)}
                        %
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        {Number(data.total_volume).toFixed(2)}
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        {Number(data.market_cap_change_percentage_24h).toFixed(
                          2
                        )}
                        %
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>{" "}
          </div>
        </>
      ) : (
        <div className="w-[85vw] flex items-center justify-center h-96 top-56 relative space-x-2  rounded-t-lg border border-gray-100">
          <div className="border-4 bg-grecyan border-green w-8 mt-2 h-8 rounded-full  animate-bounce"></div>
          <span className="text-green animate-pulse">
            There is no data to display
          </span>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Favourites;

{
  /* <table className="md:w-[85vw] md:top-56 top-64 relative rounded-t-lg border border-gray-100 table-auto">
<thead className="text-center text-gray-100 capitalize border border-gray-100">
  <tr className="">
    <th className="p-3">asset</th>
    <th className="p-3 hidden sm:table-cell">name</th>
    <th className="p-3 ">price</th>
    <th className="p-3 hidden md:table-cell">1H</th>
    <th className="p-3 hidden md:table-cell">24H</th>
    <th className="p-3 hidden md:table-cell">7D</th>
    <th className="p-3 hidden lg:table-cell">total volume</th>
    <th className="p-3 hidden lg:table-cell">market cap change</th>
  </tr>
</thead>
<tbody className="text-center text-white capitalize border font-nunito border-gray-100">
  {cryptoData.map((data) => {
    return (
      <tr className="border  border-gray-100" key={data.id}>
        <td className="py-2 flex justify-start ml-2 items-center">
          <FavButton className="" data={data.id} />
          <div className="">
            <img src={data.image} alt="" className="w-6 ml-2 h-6" />
          </div>

          <Link
            to={`/${data.id}`}
            className="cursor-pointer uppercase ml-2 font-nunito"
          >
            {data.symbol}
          </Link>
        </td>
        <td className="p-4 hidden sm:table-cell">
          <Link to={`/${data.id}`} className="cursor-pointer">
            {data.name}
          </Link>
        </td>
        <td className="p-4 text-grecyan">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: currency,
          }).format(data.current_price)}
        </td>
        <td className={`p-4 ${data.price_change_percentage_1h_in_currency > 0 ? 'text-green' : 'text-red'} hidden md:table-cell`}>
          {Number(data.price_change_percentage_1h_in_currency).toFixed(2)}%
        </td>
        <td className={`p-4 ${data.price_change_percentage_24h_in_currency > 0 ? 'text-green' : 'text-red'} hidden md:table-cell`}>
          {Number(data.price_change_percentage_24h_in_currency).toFixed(2)}%
        </td>
        <td className={`p-4 ${data.price_change_percentage_7d_in_currency > 0 ? 'text-green' : 'text-red'} hidden md:table-cell`}>
          {Number(data.price_change_percentage_7d_in_currency).toFixed(2)}%
        </td>
        <td className="p-4 hidden lg:table-cell">{Number(data.total_volume).toFixed(2)}</td>
        <td className="p-4 hidden lg:table-cell">{Number(data.market_cap_change_percentage_24h).toFixed(2)}%</td>
      </tr>
    );
  })}
</tbody>
</table> */
}
