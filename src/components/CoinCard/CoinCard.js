import React from "react";
import "./CoinCard.css";

const CoinCard = ({ coin }) => {
  return (
    <div>
      <p className="coin-card">card: {coin.name}</p>
    </div>
  );
};

export default CoinCard;
