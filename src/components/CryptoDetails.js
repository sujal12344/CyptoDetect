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
    >
      {Coin ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-[75%] w-[65%] bg-gray-300 bg-opacity-30 flex justify-between items-center  relative"
        >
          <div className=" w-[90%] h-full text-white ">
            <div className="flex mx-10 my-5 space-x-2">
              <img src={Coin.image.large} className="w-14" alt="" />
              <h2 className="font-bold text-lg font-nunito pt-3">
                {Coin.name}
              </h2>
              <span className="bg-green text-grecyan rounded  font-nunito uppercase bg-opacity-30  h-6 px-2  mt-5 text-center ">
                {Coin.symbol}
              </span>
            </div>
            <div className="grid mt-8 grid-cols-2 font-nunito gap-y-4 gap-x-2">
              <div className=" mx-2 ">
                <h2 className="text-base  font-nunito text-gray-100  ">
                  Price
                </h2>
                <span className="font-bold text-lg">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.current_price[currency])}
                </span>
              </div>
              <div className="flex justify-end  mr-10   ">
                <span
                  className={` px-1 ${
                    Coin.market_data.price_change_percentage_24h > 0
                      ? "bg-green  text-grecyan"
                      : "bg-red text-red"
                  }  rounded   h-6 bg-opacity-30 flex`}
                >
                  <h2 className="ml-1">
                    {Number(
                      Coin.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </h2>

                  <BiDownArrow
                    className={`ml-1 mt-1 ${
                      Coin.market_data.price_change_percentage_24h > 0
                        ? "rotate-180"
                        : "text-red"
                    }`}
                  />
                </span>
              </div>
              <div className=" mx-2 ">
                <h2 className="text-base  font-nunito text-gray-100  ">
                  Market cap
                </h2>
                <span className="font-bold text-base">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.market_cap[currency])}
                </span>
              </div>
              <div className=" mx-10 flex flex-col  ">
                <h2 className="text-sm   font-nunito text-gray-100  ">
                  Fully Diluted Valuation
                </h2>
                <span className="font-bold text-base self-start">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    notation: "compact",
                  }).format(Coin.market_data.fully_diluted_valuation[currency])}
                </span>
              </div>
              <div className=" mx-2 w-full h-full col-span-2 flex flex-col   ">
                <h2 className="text-sm   font-nunito text-gray-100  ">
                  Total Volume
                </h2>
                <span className="font-bold text-base self-start flex ">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.total_volume[currency])}
                </span>
                <HighLowBorder
                  High={Coin.market_data.high_24h[currency]}
                  Low={Coin.market_data.low_24h[currency]}
                  Price={Coin.market_data.current_price[currency]}
                />
              </div>

              <div className=" mx-2 ">
                <h2 className="text-sm  font-nunito text-gray-100  ">
                  Low 24H
                </h2>
                <span className="font-bold text-base">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.low_24h[currency])}
                </span>
              </div>
              <div className=" mx-2 ">
                <h2 className="text-sm  font-nunito text-gray-100  ">
                  High 24H
                </h2>
                <span className="font-bold text-base">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.high_24h[currency])}
                </span>
              </div>
              <div className=" mx-2 ">
                <h2 className="text-sm  font-nunito text-gray-100  ">
                  Max Supply
                </h2>
                <span className="font-bold text-base">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.max_supply)}
                </span>
              </div>
              <div className=" mx-2 ">
                <h2 className="text-sm  font-nunito text-gray-100  ">
                  Circulating Supply
                </h2>
                <span className="font-bold text-base">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(Coin.market_data.circulating_supply)}
                </span>
              </div>

              <div className="flex flex-col">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                  href={Coin?.links?.homepage[0]}
                >
                  {Coin?.links?.homepage[0].substring(0, 30)}
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                  href={Coin?.links?.blockchain_site[0]}
                >
                  {Coin?.links?.blockchain_site[0].substring(0, 30)}
                </a>

                {Coin?.links?.official_forum_url[0] && (
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                    href={Coin?.links?.official_forum_url[0]}
                  >
                    {Coin?.links?.official_forum_url[0].substring(0, 30)}
                  </a>
                )}
              </div>
              <div className="flex items-end mr-10 space-y-2  flex-col">
                <h2 className="text-sm  font-nunito text-gray-100  ">
                  Sentiment
                </h2>
                <span
                  className={` px-1 ${
                    Coin.sentiment_votes_up_percentage > 0
                      ? "bg-green  text-grecyan"
                      : "bg-red text-red"
                  }  rounded   h-5 bg-opacity-40 flex`}
                >
                  <h2 className="ml-1">
                    {Number(Coin.sentiment_votes_up_percentage).toFixed(2)}%
                  </h2>

                  <BiDownArrow
                    className={`ml-1 mt-1 ${
                      Coin.sentiment_votes_up_percentage > 0
                        ? "rotate-180"
                        : "text-red"
                    }`}
                  />
                </span>
                <span
                  className={` px-1 ${
                    Coin.sentiment_votes_down_percentage == 0
                      ? "bg-green  text-grecyan"
                      : "bg-red text-red"
                  }  rounded h-5 bg-opacity-40 flex`}
                >
                  <h2 className="ml-1">
                    {Number(Coin.sentiment_votes_down_percentage).toFixed(2)}%
                  </h2>

                  <BiDownArrow
                    className={`ml-1 mt-1 ${
                      Coin.sentiment_votes_down_percentage == 0
                        ? "rotate-180"
                        : "text-red"
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className=" w-full ml-2 h-full">
            <CryptoChart id={Coinid} />
            <div className="w-full pl-10 mt-8 space-y-1">
              <h3 className="text-gray-100">
                {" "}
                <span className="text-green font-nunito font-bold">
                  CoinGecko{" "}
                </span>{" "}
                Rank :{" "}
                <span className="text-white">{Coin.coingecko_rank} </span>{" "}
              </h3>
              <h3 className="text-gray-100">
                {" "}
                <span className="text-green font-nunito font-bold">
                  CoinGecko{" "}
                </span>{" "}
                Rank :{" "}
                <span className="text-white">{Coin.coingecko_score} </span>{" "}
              </h3>
            </div>
            <div className="text-gray-300 w-full pb-3 h-[20%] pl-10 flex space-x-3 items-end justify-end pr-6">
              {Coin.links.repos_url.github[0] && (
                <div className=" hover:scale-105 w-10 h-10 flex items-center justify-center  border rounded-full bg-green">
                  {" "}
                  <a
                    target={"_blank"}
                    className="text-lg"
                    href={Coin.links.repos_url.github[0]}
                  >
                    <AiFillGithub />
                  </a>
                </div>
              )}
              {Coin.links.subreddit_url && (
                <div className=" hover:scale-105 w-10 h-10 flex items-center justify-center  border rounded-full bg-green">
                  <a
                    target={"_blank"}
                    className="text-lg"
                    href={Coin.links.subreddit_url}
                  >
                    <BsReddit />
                  </a>
                </div>
              )}
              {Coin.links.twitter_screen_name && (
                <div className=" hover:scale-105 w-10 h-10 flex items-center justify-center  border rounded-full bg-green">
                  <a
                    target={"_blank"}
                    className="text-lg"
                    href={`https://twitter.com/${Coin.links.twitter_screen_name}`}
                  >
                    <AiOutlineTwitter />
                  </a>
                </div>
              )}
              {Coin.links.facebook_username && (
                <div className=" hover:scale-105 w-10 h-10 flex items-center justify-center  border rounded-full bg-green">
                  <a
                    target={"_blank"}
                    className="text-lg"
                    href={`https://facebook.com/${Coin.links.facebook_username}`}
                  >
                    <BsFacebook />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-[75%] w-[65%] bg-gray-300 bg-opacity-75 text-red relative"
        >
          coin not found
        </div>
      )}
    </div>,
    document.getElementById("modal")
  );
};

export default CryptoDetails;
