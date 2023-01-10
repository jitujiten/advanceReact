import React from "react";
import "./Chart.css";
import Chartbar from "./Chartbar";
const Chart = (props) => {
   const datapointvalues=props.datapoints.map(datapoint=>datapoint.value)
    const totalmaximun=Math.max(...datapointvalues);

  return (
    <div className="Chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxvalue={totalmaximun}
        />
      ))}
    </div>
  );
};

export default Chart;
