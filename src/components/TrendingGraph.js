import React, { useContext, useEffect, useState } from 'react';
import { Trendingdata } from './Context/TrendingData';
import { BarChart, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';
import TrendingCard from './TrendingCard';

const TrendingGraph = () => {
  const { TrendData } = useContext(Trendingdata);
  const [convertedData, setConvertedData] = useState([]);

  useEffect(() => {
    if (TrendData) {
      const data = TrendData.coins.map((e) => ({
        Rank: e.item.market_cap_rank,
        name: e.item.id,
        img: e.item.small,
        Price: e.item.price_btc,
      }));
      setConvertedData(data);
    }
  }, [TrendData]);

  return (
    <>
      <div className='w-full h-full flex flex-col border-4 justify-center'>
        <TrendingCard />

        <div className='self-center'>
          <BarChart width={window.innerWidth > 500 ? 800:310} height={300} data={convertedData}>
            <XAxis tickSize={10} tickMargin={1} tick={{ stroke: '#ffffff', strokeWidth: 0.5 }} orientation='bottom' dataKey='name' />
            <YAxis />
            <Tooltip stroke='#adefd1ff' />
            <Legend />
            <Bar dataKey='Rank' barSize={35} fill='#90EE90' />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default TrendingGraph;
