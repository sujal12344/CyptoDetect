import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { Cryptodata } from "./Context/Data";

const Search = () => {
  let { fetchsearchdata } = useContext(Cryptodata);
  let lodashfunc = debounce(function (val) {
    fetchsearchdata(val);
  }, 2000);
  return (
    <>
      <h4>Search functionality</h4>
    </>
  );
};

export default Search;
