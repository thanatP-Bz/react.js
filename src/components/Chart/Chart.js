import React from "react";
import ChartBar from "./ChartBar";
import "ChartBar.css";
import { data } from "browserslist";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={data.dataPoint}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
