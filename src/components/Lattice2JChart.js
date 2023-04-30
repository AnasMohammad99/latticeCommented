import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import styled from "styled-components";
import { currentCalculation, timeCalculation, voltageCalculation } from "../TwoJCalculations";

Chart.register(CategoryScale);
const Lattice2JChart = ({twoJValues}) => {
  console.log(twoJValues);
  let [amplitude, Z1, Z2, Z3, l1, v1] = twoJValues
  let voltageArr = voltageCalculation(Z1, Z2, Z3, amplitude);
  let currentArr = currentCalculation(Z1, Z2, Z3, amplitude);
  let timeArr = timeCalculation(l1, v1)
  const data1 = {
    labels: timeArr[0],
    datasets: [
        {
          label: 'Volt A',
          data: voltageArr[0],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
          stepped: true,
      },
    ]
  };
  const data2 = {
    labels: timeArr[0],
    datasets: [
      {
          label: 'Current A',
          data: currentArr[0],
          borderColor: "rgb(255, 99, 132)",
          fill: false,
          stepped: true,
      }
    ]
  };
  const data3 = {
    labels: timeArr[1],
    datasets: [
      {
          label: 'Volt B',
          data: voltageArr[1],
          borderColor: "rgb(155, 49, 132)",
          fill: false,
          stepped: true,
      }
    ]
  };
  const data4 = {
    labels: timeArr[1],
    datasets: [
      {
          label: 'Current B',
          data: currentArr[1],
          borderColor: "rgb(155, 49, 132)",
          fill: false,
          stepped: true,
      }
    ]
  };
  
  return (
    <LineWrapper>
      <Line data={data1} />
      <Line data={data2} />
      <Line data={data3} />
      <Line data={data4} />
    </LineWrapper>
  );
};

const LineWrapper = styled.div`

`
export default Lattice2JChart;
