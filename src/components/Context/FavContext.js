import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Cryptodata } from "./Data";

export const FavouriteContext = createContext({});

export const FavouriteData = ({ children }) => {
  const [allcoins, Setallcoins] = useState([]);
  const [contextdata, SetContextdata] = useState();
  const { currency, Sortby } = useContext(Cryptodata);

  const setCoin = async (Coinid) => {
    const oldcoin = await JSON.parse(localStorage.getItem("coins"));
    if (oldcoin.includes(Coinid)) {
      return null;
    } else {
      const Newcoin = [...oldcoin, Coinid];
      localStorage.setItem("coins", JSON.stringify(Newcoin));
      Setallcoins(Newcoin);
    }
  };

  const Removecoin = async (Coinid) => {
    const oldcoin = await JSON.parse(localStorage.getItem("coins"));
    const newcoin = await oldcoin.filter((e) => {
      return e != Coinid;
    });
    Setallcoins(newcoin);
    localStorage.setItem("coins", JSON.stringify(newcoin));
  };

  const saveddata = async (isValid = allcoins) => {
    try {
      const Fetcheddata = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${isValid.join(
          ","
        )}&order=${Sortby}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then((res) => res.json())
        .then((json) => json);
      console.log(Fetcheddata);
      SetContextdata(Fetcheddata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (allcoins.length > 0) {
      saveddata(allcoins);
    } else {
      SetContextdata();
    }
  }, [allcoins]);

  useLayoutEffect(() => {
    const isValid = JSON.parse(localStorage.getItem("coins")) || false;
    if (!isValid) {
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      Setallcoins(isValid);
    }

    if (isValid.length > 0) {
      saveddata(isValid);
    }
  }, []);

  return (
    <FavouriteContext.Provider
      value={{
        setCoin,
        Removecoin,
        allcoins,
        contextdata,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
