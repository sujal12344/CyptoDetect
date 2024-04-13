import React from "react";
import Submiticon from "../assets/submit-icon.svg";
import { Cryptodata } from "./Context/Data";
import { useRef } from "react";
import { useContext } from "react";

const Currency = () => {
  const { Setcurrency } = useContext(Cryptodata);
  const currencyval = useRef(null);
  const handleCurrency = (e) => {
    e.preventDefault();
    let val = currencyval.current.value;
    Setcurrency(val);
    currencyval.current.value = "";
  };
  return (
    <>
      <div className="flex items-center justify-center ">
        <div>
          <h2 className="text-white text-md mr-1  font-nunito">currency:</h2>
        </div>
        <div>
          <input
            type="text"
            ref={currencyval}
            className="w-16 px-2 rounded border border-transparent focus:border-green bg-gray-200 text-grecyan font-nunito placeholder:text-gray-100"
            placeholder="usd"
          />
        </div>
        <div>
          <button onClick={handleCurrency}>
            <img src={Submiticon} className=" h-7 mt-1 " alt="Submit" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Currency;
