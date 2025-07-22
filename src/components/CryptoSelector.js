import React from "react";

const CryptoSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="bitcoin">Bitcoin (BTC)</option>
      <option value="ethereum">Ethereum (ETH)</option>
      <option value="solana">Solana (SOL)</option>
    </select>
  );
};

export default CryptoSelector;
