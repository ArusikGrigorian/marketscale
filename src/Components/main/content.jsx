import React from "react";
import Table from "./table/table";
import ChartLine from "./charts/line";
import ChartPie from "./charts/pie";

const Content = ({ data }) => {
  return (
    <div className="content">
      <Table data={data} />
      <ChartLine data={data} />
      <ChartPie data={data} />
    </div>
  );
};

export default Content;
