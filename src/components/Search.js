import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import Searchicon from "../assets/search-icon.svg";
import { Cryptodata } from "./Context/Data";

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
