import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RevenueChart() {

  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    fetchRevenueChart();
  }, []);

  const fetchRevenueChart = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/revenue-chart"
      );

      const data = await response.json();

      setRevenueData(data.revenueData);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="revenue-box">

      <h2>Revenue Trend</h2>

      <ResponsiveContainer width="100%" height={600}>

        <BarChart data={revenueData}>

          <XAxis
            dataKey="month"
            tick={{ fill: "#ffffff" }}
          />

          <YAxis
            tick={{ fill: "#ffffff" }}
          />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#0ea5e9"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;