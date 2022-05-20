import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ChartLine = ({ data }) => {
  //modifying data to have an appropriate chart
  data = data.map((singleData, i) => {
    return {
      ...singleData,
      name: singleData.Country,
      pv: i * 500,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 40,
          left: 10,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#817eff" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
