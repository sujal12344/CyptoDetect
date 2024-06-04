import { createContext, useLayoutEffect, useState } from "react";

export const Trendingdata = createContext({});

export const TrendingData = ({ children }) => {
  const [TrendData, settTrendData] = useState();

  const fetchtrenddata = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);
      settTrendData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    fetchtrenddata();
  }, []);

  return (
    <Trendingdata.Provider value={{ TrendData }}>
      {children}
    </Trendingdata.Provider>
  );
};
