import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="px-10 py-8">
      <h3 className="text-center font-bold text-gray-700 text-3xl">
        Available Crypto Currencies
      </h3>
      <p className="text-center mt-2 text-gray-500 font-semibold">
        Total Currencies: {coins.length}
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Coins;
