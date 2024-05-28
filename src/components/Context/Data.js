import { createContext } from "react";

export const Cryptodata = createContext({});

export const Data = ({ children }) => {
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

  return (
    <Cryptodata.Provider
      value={{
        fetchModalCoin,
      }}
    >
      {children}
    </Cryptodata.Provider>
  );
};
