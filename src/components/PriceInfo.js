import React from "react";

const PriceInfo = ({ prices }) => {
  return (
    <div>
      <p>R$: <strong>{prices.brl?.toFixed(2)}</strong></p>
      <p>US$: <strong>{prices.usd?.toFixed(2)}</strong></p>
      <p>EUR: <strong>{prices.eur?.toFixed(2)}</strong></p>
    </div>
  );
};

export default PriceInfo;
