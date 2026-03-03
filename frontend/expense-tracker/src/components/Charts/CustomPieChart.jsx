import React from "react";
import FinanceOverView from "../Dashboard/FinanceOverView";
import CustomTooltip from "./CustomTooltip";
import ContentLegend from "./ContentLegend";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomPieChart = ({
  data,
  label,
  totalAmoount,
  colors,
  showTextAchor,
}) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={130}
          labelline={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={ContentLegend} />
        {showTextAchor && (
          <>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
              dy={-25}
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="semi-bold"
              dy={8}
            >
              {totalAmoount}
            </text>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
