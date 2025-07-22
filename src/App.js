import React, { useEffect, useState } from "react";
import CryptoSelector from "./components/CryptoSelector";
import PriceInfo from "./components/PriceInfo";
import PriceChart from "./components/PriceChart";
import "./App.css";

function App() {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [prices, setPrices] = useState({ brl: 0, usd: 0, eur: 0 });
  const [days, setDays] = useState(7);



  const fetchPrices = async (coinId) => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=brl,usd,eur`;
    const res = await fetch(url);
    const data = await res.json();
    setPrices(data[coinId]);
  };

  useEffect(() => {
    fetchPrices(selectedCoin);
  }, [selectedCoin]);

 return (
  <div className="App">
    <h1>💰 Cotação de Criptomoedas</h1>
    <CryptoSelector value={selectedCoin} onChange={setSelectedCoin} />

    <select value={days} onChange={(e) => setDays(e.target.value)}>
      <option value="1">Últimas 24h</option>
      <option value="7">Últimos 7 dias</option>
      <option value="30">Últimos 30 dias</option>
      <option value="90">Últimos 90 dias</option>
    </select>

    <PriceInfo prices={prices} />
    <PriceChart coinId={selectedCoin} days={days} />
  </div>
);

}

export default App;
