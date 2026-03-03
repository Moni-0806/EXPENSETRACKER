import React, { useEffect, useState } from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [charData, setChartData] = useState([]);
  const preparedChartData = () => {
    console.log("Income chart data:", data); // Debug log
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: parseFloat(item?.amount) || 0,
    }));
    console.log("Prepared chart data:", dataArr); // Debug log
    setChartData(dataArr);
  };
  useEffect(() => {
    preparedChartData();
    return () => { };
  }, [data]);
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Last 60 Days Income</h5>
      </div>
      <CustomPieChart
        data={charData}
        label="Total Income"
        totalAmoount={`$${totalIncome}`}
        showTextAchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
