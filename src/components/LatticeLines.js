import React from 'react'
import LatticeLine from './LatticeLine'
import styled from "styled-components"

const LatticeLines = ({lineColor, transmit, timeArr, coefficients}) => {
  return (
    <Wrapper>
        {
          timeArr.map((junctionTime, index)=>{
            return(
              <LatticeLine coefficients={coefficients} lineColor={lineColor} key={index} index={index} junctionTime={junctionTime.slice(0,5)} junctionTransmit={transmit[index].slice(0,5)} />
            )
          })
        }
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    overflow-x: scroll;
`
export default LatticeLines