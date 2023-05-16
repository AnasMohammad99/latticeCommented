import styled from "styled-components";
import Lattice3JChart from './components/LatticeChart';
import { useState } from "react";
import { Button, Stack, TextField} from "@mui/material";
import LatticeForm from "./components/LatticeForm"
import LatticeDiagrams from "./components/LatticeDiagrams";
import { AllCalculations } from "./ThreeJCalculations";

function App() {
  const [threeJValues, setThreeJValues] = useState([0,0,[0],[0],[0],0,0])
  const [numOfJunctions, setNumOfJunctions] = useState("");
  const [numOfJunctionsSended, setNumOfJunctionsSended] = useState(""); 
  let [amplitude, NumOfJ, Z=[], length=[], velocity=[], twoj, numOfIterations] = threeJValues
  let [voltageArr, currentArr, timeArr, voltCoefficients, currentCoeffecients]=[[],[],[],[],[]]
  if(NumOfJ>1){
    [voltageArr, currentArr, timeArr, voltCoefficients, currentCoeffecients] = AllCalculations(amplitude,NumOfJ,Z,length,velocity, twoj, numOfIterations);
  }
    function handleFormOfProblem(event) {
      event.preventDefault();
      setNumOfJunctionsSended(numOfJunctions)
    }

  return (
    <Wrapper>
      <ProjectTitle>
          Bewley Lattice diagram
      </ProjectTitle>
      <LayoutWrapper>
        <SidebarWrapper>
          <form onSubmit={handleFormOfProblem}>
            <Stack 
            style={{display:`${numOfJunctionsSended?"none":"flex"}`, justifyContent:"space-between"}} 
            spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
            <TextField
                type="number"
                variant='outlined'
                color='secondary'
                label="Number of junctions"
                onChange={e =>setNumOfJunctions(e.target.value)}
                value={numOfJunctions}
                // fullWidth
                required
            />
            <Button type="submit" style={{height:"3.5rem"}} variant="outlined" color="secondary">Create</Button>
            </Stack> 
            </form>  
            {
              numOfJunctionsSended ? <LatticeForm setThreeJValues={setThreeJValues} numOfJunctions={numOfJunctions} setNumOfJunctions={setNumOfJunctions} setNumOfJunctionsSended={setNumOfJunctionsSended} numOfJunctionsSended = {numOfJunctionsSended} /> : null
            }
        </SidebarWrapper>
        <BodyWrapper>
          <LatticeChartWrapper>
            {
              threeJValues[1]>1?<Lattice3JChart voltageArr={voltageArr} currentArr={currentArr} timeArr={timeArr} threeJValues={threeJValues} />:
              null
            }
          </LatticeChartWrapper>
          <LatticeTransmitWrapper>
            {
              threeJValues[1]>1?<LatticeDiagrams coefficients = {voltCoefficients} lineColor="rgb(255, 99, 132)" transmit={voltageArr} timeArr={timeArr} />:
              null
            }
          </LatticeTransmitWrapper>
          <LatticeTransmitWrapper>
            {
              threeJValues[1]>1?<LatticeDiagrams coefficients = {currentCoeffecients} lineColor="rgb(53, 162, 235)" transmit={currentArr} timeArr={timeArr} />:
              null
            }
          </LatticeTransmitWrapper>
        </BodyWrapper>
      </LayoutWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
`
const ProjectTitle = styled.h1`
    background-color: white;
    padding: 0 5px 5px 5px;
    margin: 25px 25px 0 25px;
    border-radius: 10px;
    text-align: center;
    color: #2276FF;
`
const LayoutWrapper = styled.div`
    /* background-color: green; */
    display: flex;
    @media (max-width: 876px) {
    flex-direction: column;
  }
`
const SidebarWrapper = styled.div`
    /* background-color: red; */
    height: 100%;
    background-color: white;
    margin: 25px;
    margin-right: 0;
    border-radius:10px;
    padding: 20px;
    /* overflow-x: scroll; */
    max-width: 45%;
    min-width: 45%;
    /* max-width: 40rem; */
    @media (max-width: 876px) {
      max-width: 100%;
    /* min-width: 100%; */
      /* width: 90%; */
      margin-right: 25px;
  }
`
const BodyWrapper = styled.div`
    max-width: 50%;
    min-width: 40%;
    margin: 25px;
    /* border-radius:10px; */
    /* padding: 20px; */
    @media (max-width: 876px) {
      max-width: 100%;
    /* min-width: 100%; */
      /* width: 90%; */
  }
`
const LatticeChartWrapper = styled.div`
  background-color: white;
  /* width: 95%; */
    margin-bottom: 25px;
    border-radius:10px;
    padding: 19px;
    @media (max-width: 876px) {
      width: 95%;
    /* min-width: 100%; */
      /* width: 90%; */
  }
`
const LatticeTransmitWrapper = styled.div`
  background-color: white;
  /* width: 95%; */
    margin-bottom: 25px;
    border-radius:10px;
    padding: 19px;
    @media (max-width: 876px) {
      width: 95%;
    /* min-width: 100%; */
      /* width: 90%; */
  }
`
export default App;
