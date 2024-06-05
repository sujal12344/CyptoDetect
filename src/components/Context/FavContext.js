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
  return (
    <FavouriteContext.Provider value={{}}>{children}</FavouriteContext.Provider>
  );
};
