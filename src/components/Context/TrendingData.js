const [TrendData, settTrendData] = useState();

const fetchtrenddata = async () => {
  try {
    const data = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => res.json())
      .then((json) => json);
    settTrendData(data);
  } catch (err) {
    console.log(err);
  }
};
