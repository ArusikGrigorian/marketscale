import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const ChartPie = ({ data }) => {
  //modifying data to an appropriate chart
  data = data.map((singleData, i) => {
    return {
      ...singleData,
      name: singleData.Country,
      value: i * 200,
    };
  });

  return (
    <ResponsiveContainer>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#817eff"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartPie;
