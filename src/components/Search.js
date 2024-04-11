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
