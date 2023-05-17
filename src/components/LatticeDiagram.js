import {Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React, { Fragment } from 'react'
import { ArrowBack, ArrowForward, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Divider } from 'antd';
import styled from 'styled-components';


const LatticeDiagram = ({index, junctionTime, junctionTransmit, lineColor, coefficients}) => {
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
            <Fragment key={index}>
              <DividerStyled 
              lineColor={lineColor}
              junctionTime={junctionTime}
              index={index}
              // style={{width:"5px", height:"200px", backgroundColor:lineColor}} 
              type="vertical"
               />
              <Stack style={{display:"flex", flexDirection:"row"}}>
                <Stack style={{alignItems:"center"}}>
                <TypographyStyled junctionTime={junctionTime} index={index}>{element} s</TypographyStyled>
                <ArrowForward />
                <Typography>{+junctionTransmit[1][index].toFixed(2)} {lineColor==="rgb(255, 99, 132)"?"V":"A"}</Typography>
                <ArrowBack />
                <Typography>{+junctionTransmit[0][index].toFixed(2)} {lineColor==="rgb(255, 99, 132)"?"V":"A"}</Typography>
                </Stack>
              </Stack>

            </Fragment>
          )
        })
       }
      </Stack>
    </div>
  )
}
const DividerStyled = styled(Divider)`
  width: 5px;
  height: ${props=>(!isNaN(props.junctionTime[props.index - 1])?props.junctionTime[props.index]-props.junctionTime[props.index - 1]:props.junctionTime[props.index])*100}px;
  background-color: ${props => props.lineColor};
`
const TypographyStyled = styled(Typography)`
display: ${props=> props.junctionTime[props.index - 1]===props.junctionTime[props.index]?"none":"Block"};
`
export default LatticeDiagram