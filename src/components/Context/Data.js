import { createContext, useLayoutEffect, useState } from "react";

export const Cryptodata = createContext({});

export const Data = ({ children }) => {
  const [cryptoData, getcryptoData] = useState();
  const [searchData, setsearchData] = useState();
  const [coinData, setcoinData] = useState("");
  const [currency, Setcurrency] = useState("usd");
  const [Sortby, SetSortby] = useState("market_cap_desc");
  const [Page, SetPage] = useState(1);
  const [TotalPages, SetTotalPages] = useState(250);
  const [PerPage, SetPerPage] = useState(10);
  const [Coin, getCoin] = useState();

  const fetchModalCoin = async (coinid) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      )
        .then((res) => res.json())
        .then((json) => json);
      getCoin(data);
      console.log("Coindata", data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchdata = async () => {
    getcryptoData();
    SetTotalPages(13220);

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinData}&order=${Sortby}&per_page=${PerPage}&page=${Page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then((res) => res.json())
        .then((json) => json);
      getcryptoData(data);
    } catch (err) {
      console.log(err);
    }
    try {
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then((res) => res.json())
        .then((json) => json);
      SetTotalPages(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchsearchdata = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      setsearchData(data.coins);
      console.log(data.coins);
    } catch (err) {
      console.log(err);
    }
  };
  useLayoutEffect(() => {
    fetchdata();
  }, [coinData, currency, Sortby, Page, PerPage]);

  const resetFunc = () => {
    SetPage(1);
    setcoinData("");
    Setcurrency("usd");
    SetPerPage(10);
  };

  return (
    <Cryptodata.Provider
      value={{
        cryptoData,
        fetchsearchdata,
        searchData,
        setcoinData,
        setsearchData,
        Setcurrency,
        currency,
        Sortby,
        SetSortby,
        Page,
        SetPage,
        TotalPages,
        SetPerPage,
        PerPage,
        resetFunc,
        Coin,
        getCoin,
        fetchModalCoin,
      }}
    >
      {children}
    </Cryptodata.Provider>
  );
};
