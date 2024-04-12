import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import Searchicon from "../assets/search-icon.svg";
import { Cryptodata } from "./Context/Data";

const Searchinput = ({ handleSearch }) => {
  const [Text, setText] = useState("");
  const { searchData, setcoinData, setsearchData } = useContext(Cryptodata);

  const setcoindata = (coin) => {
    setcoinData(coin);
    setText("");
    setsearchData();
  };
  return (
    <>
      <form className="flex ml-2">
        <input
          type="text"
          placeholder="Search here.."
          className="bg-gray-200 md:w-96 mx-auto sm:w-96 w-80 rounded-md text-green placeholder:text-gray-100 pl-2 required md:border border-transparent  focus:border-green"
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value);
            let query = e.target.value;
            handleSearch(query);
          }}
          value={Text}
        />
        <button type="submit">
          <img
            src={Searchicon}
            className="relative right-6 cursor-pointer"
            alt="Search"
          />
        </button>
      </form>

      {Text.length > 0 ? (
        <ul className="w-96 p-2 bg-gray-100 backdrop-blur-md bg-opacity-60 absolute top-10 left-2 h-96 overflow-x-hidden rounded z-10 font-nunito text-white  ">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex mb-1 cursor-pointer "
                  onClick={() => {
                    setcoindata(coin.id);
                  }}
                  key={coin.id}
                >
                  <img src={coin.thumb} alt="" className="w-6 ml-2  h-6" />
                  <span className="ml-2">{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div className="border-4 rounded-full border-b-gray-200 animate-spin border-green h-12 w-12"></div>
              <h2 className="ml-2 font-nunito">Searching</h2>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { fetchsearchdata } = useContext(Cryptodata);
  let lodashfunc = debounce(function (val) {
    fetchsearchdata(val);
  }, 2000);
  return (
    <>
      <Searchinput handleSearch={lodashfunc} />
    </>
  );
};

export default Search;
