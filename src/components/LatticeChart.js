import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import styled from "styled-components";

Chart.register(CategoryScale);
const LatticeChart = ({voltageArr, currentArr, timeArr, threeJValues}) => {
  // console.log(threeJValues);
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
    </LineWrapper>
  );
};

const LineWrapper = styled.div`

`
export default LatticeChart;
