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

  return (
    <FavouriteContext.Provider
      value={{
        setCoin,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
