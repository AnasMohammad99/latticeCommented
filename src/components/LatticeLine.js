import {Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React from 'react'
import { ArrowForward, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Divider } from 'antd';

// let arr = [1.526,7.65,13.456,17.597]


const LatticeLine = ({index, junctionTime, junctionTransmit, lineColor, coefficients}) => {
  return (
    <div>
      <Stack style={{margin:"10px", width:"fit-content", minWidth:"12.5rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Typography style={{width:"fit-content" }}>Junction {index+1}</Typography>
        <Stack style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Typography>Tau = {+coefficients[0][index].toFixed(2)}, rho = {+coefficients[2][index].toFixed(2)}</Typography>
          <KeyboardDoubleArrowRight />
        </Stack>
        <Stack style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Typography>TauR = {+coefficients[1][index].toFixed(2)}, rhoR = {+coefficients[3][index].toFixed(2)}</Typography>
        <KeyboardDoubleArrowLeft />
        </Stack>
       {
        junctionTime.map((element, index)=>{
          return(
            <>
              <Stack key={index} style={{display:"flex", flexDirection:"row"}}>
                <ArrowForward />
                <Stack style={{alignItems:"center"}}>
                <Typography>{element} s</Typography>
                <Typography>{+junctionTransmit[index].toFixed(2)} {lineColor==="rgb(255, 99, 132)"?"V":"A"}</Typography>
                </Stack>
              </Stack>
              <Divider style={{width:"5px", height:"200px", backgroundColor:lineColor}} type="vertical" />
            </>
          )
        })
       }
      </Stack>
    </div>
  )
}

export default LatticeLine