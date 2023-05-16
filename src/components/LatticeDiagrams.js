import React from 'react'
import LatticeDiagram from './LatticeDiagram'
import styled from "styled-components"

const LatticeDiagrams = ({lineColor, transmit, timeArr, coefficients}) => {
  return (
    <Wrapper>
        {
          timeArr.map((junctionTime, index)=>{
            return(
              <LatticeDiagram coefficients={coefficients} lineColor={lineColor} key={index} index={index} junctionTime={junctionTime.slice(0,5)} junctionTransmit={transmit[index].slice(0,5)} />
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
export default LatticeDiagrams