import React from "react";
import { Link } from "react-router-dom";
import "./CoinCard.css";

const CoinCard = ({ coin }) => {
  return (
    <div className="shadow-lg rounded-md p-4 bg-white">
      <Link to={`/coin-details/${coin.id}`}>
        <div className="flex gap-4 w-[250px]  justify-between">
          <div className="flex-shrink-0">
            <img
              className="object-cover mx-auto rounded-full w-16 h-16"
              src={coin.image}
              alt="loading"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="text-gray-800 text-xl font-semibold">
              {coin.name}
            </span>
            <span className="text-gray-400 text-sm font-semibold">
              {coin.symbol}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
