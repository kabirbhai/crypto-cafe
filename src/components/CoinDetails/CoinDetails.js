import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState({});

  useEffect(() => {
    setLoading(true);
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-10 pt-28 h-[80vh] max-w-7xl mx-auto">
          <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 px-5 p-14 content-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl">General Info:</h1>
              <h1>Name: {coin.name}</h1>
              <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
              <h1>
                Origin:{" "}
                {coin.country_origin ? coin.country_origin : "Not found"}
              </h1>

              <h1 className="text-3xl mt-2">Score:</h1>
              <h1>Community Score: {coin.community_score}</h1>
              <h1>Developer Score: {coin.developer_score}</h1>
              <h1>
                Origin:{" "}
                {coin.country_origin ? coin.country_origin : "Not found"}
              </h1>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center content-center">
              <img src={coin.image?.large} alt="loading" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
