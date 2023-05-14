import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import styled from "styled-components";
import { AllCalculations } from "../ThreeJCalculations";

Chart.register(CategoryScale);
const LatticeChart = ({voltageArr, currentArr, timeArr, threeJValues}) => {
  console.log(threeJValues);
  // let [amplitude, NumOfJ, Z=[], length=[], velocity=[], twoj] = threeJValues
  // let [voltageArr=[], currentArr=[], timeArr=[]] = AllCalculations(amplitude,NumOfJ,Z,length,velocity, twoj);
  // console.log(voltageArr);

  // const data1 = {
  //   labels: timeArr[0],
  //   datasets: [
  //       {
  //         label: 'Volt A',
  //         data: voltageArr[0],
  //         borderColor: "rgb(255, 99, 132)",
  //         fill: false,
  //         stepped: true,
  //     },
  //   ]
  // };
  // const data2 = {
  //   labels: timeArr[0],
  //   datasets: [
  //     {
  //         label: 'Current A',
  //         data: currentArr[0],
  //         borderColor: "rgb(255, 99, 132)",
  //         fill: false,
  //         stepped: true,
  //     }
  //   ]
  // };
  // const data3 = {
  //   labels: timeArr[1],
  //   datasets: [
  //     {
  //         label: 'Volt C',
  //         data: voltageArr[1],
  //         borderColor: "rgb(155, 49, 132)",
  //         fill: false,
  //         stepped: true,
  //     }
  //   ]
  // };
  // const data4 = {
  //   labels: timeArr[1],
  //   datasets: [
  //     {
  //         label: 'Current C',
  //         data: currentArr[1],
  //         borderColor: "rgb(155, 49, 132)",
  //         fill: false,
  //         stepped: true,
  //     }
  //   ]
  // };
  // const data5 = {
  //   labels: timeArr[2],
  //   datasets: [
  //       {
  //         label: 'Volt B',
  //         data: voltageArr[2],
  //         borderColor: "rgb(53, 162, 235)",
  //         fill: false,
  //         stepped: true,
  //     },
  //   ]
  // };
  // const data6 = {
  //   labels: timeArr[2],
  //   datasets: [
  //       {
  //         label: 'Current B',
  //         data: currentArr[2],
  //         borderColor: "rgb(53, 162, 235)",
  //         fill: false,
  //         stepped: true,
  //     },
  //   ]
  // };
  let data = []
  for (let i = 0; i < timeArr.length; i++) {
      data.push([{
        labels: timeArr[i],
        datasets: [
            {
              label: `Volt Junction ${i+1}`,
              data: voltageArr[i],
              borderColor: "rgb(255, 99, 132)",
              fill: false,
              stepped: true,
          },
        ],
      }, 
      {
        scales: {
          x:{
            title:{
              display:true,
              text:"Time(s)",
            }
          },
          y:{
            title:{
              display:true,
              text:"Voltage (V)"
            },
          }
        },     
      }
    ])
      data.push([{
        labels: timeArr[i],
        datasets: [
            {
              label: `Current Junction ${i+1}`,
              data: currentArr[i],
              borderColor: "rgb(53, 162, 235)",
              fill: false,
              stepped: true,
          },
        ]
      },
      {
        scales: {
          x:{
            title:{
              display:true,
              text:"Time (s)"
            }
          },
          y:{
            title:{
              display:true,
              text:"Current (A)"
            }
          }
        },     
      }
    ])
  }
  return (
    <LineWrapper>
      {
        data.map((chart, index)=>{
          return(
            <Line key={index} data={chart[0]} options={chart[1]} />
          )
        })
      }
      {/* <Line data={data1} />
      <Line data={data2} />
        <>
          <Line data={data3} />
          <Line data={data4} />
        </>
      }
      <Line data={data5} />
      <Line data={data6} /> */}
    </LineWrapper>
  );
};

const LineWrapper = styled.div`

`
export default LatticeChart;
