import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PriceChart = ({ coinId, days }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.prices) return;

      const labels = data.prices.map(p => {
        const d = new Date(p[0]);
        return `${d.getDate()}/${d.getMonth() + 1}`;
      });

      const values = data.prices.map(p => p[1]);

      setChartData({
        labels,
        datasets: [
          {
            label: `Preço (USD) - ${coinId}`,
            data: values,
            borderColor: "#00ccff",
            backgroundColor: "rgba(0, 204, 255, 0.3)",
            tension: 0.3,
            fill: true
          }
        ]
      });
    };

    fetchChartData();
  }, [coinId, days]);

  if (!chartData) return <p>Carregando gráfico...</p>;

  return <Line data={chartData} />;
};

export default PriceChart;
