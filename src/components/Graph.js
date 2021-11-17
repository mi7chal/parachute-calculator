import Chart from "chart.js/auto";

import { useEffect, useRef } from "react";
import "../functions/calculations";
import {
  calculateByDelay,
  calculateSpeedByDelay,
} from "../functions/calculations";
function Graph({ data, title, titleY, titleX, id }) {

  const ref = useRef();
  const config = {
    type: "line",
    data: {
      //labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [{ data: data, borderColor: "rgb(56, 175, 255)", radius: 0 }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: false,
        title: {
          display: true,
          text: title,
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          type: "linear",
          display: true,
          title: {
            text: titleX,
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: titleY,
          },
        },
      },
    },
  };

  useEffect(() => {
    const myChart = new Chart(ref.current,config);
  },[]);

  return (
    <div className="Graph">
      <canvas className='chartCanvas' ref={ref}></canvas>
    </div>
  );
}

export default Graph;
