import styled from "styled-components";
// import Lattice2JForm from './components/Lattice2JForm';
// import Lattice3JForm from './components/Lattice3JForm';
// import Lattice2JChart from './components/Lattice2JChart';
import Lattice3JChart from './components/Lattice3JChart';
import { useState } from "react";
// import LatticeForm from "./components/LatticeForm";
import { Button, Stack, TextField} from "@mui/material";
// import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormExample from "./components/FormExample"

function App() {
  // const [twoJValues, setTwoJValues] = useState([0,0,0,0,0,0])
  const [threeJValues, setThreeJValues] = useState([0,0,[0],[0],[0],0])
  const [numOfJunctions, setNumOfJunctions] = useState("");
  const [numOfJunctionsSended, setNumOfJunctionsSended] = useState(""); 
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
              numOfJunctionsSended ? <FormExample setThreeJValues={setThreeJValues} numOfJunctions={numOfJunctions} setNumOfJunctions={setNumOfJunctions} setNumOfJunctionsSended={setNumOfJunctionsSended} numOfJunctionsSended = {numOfJunctionsSended} /> : null
            }
        </SidebarWrapper>
        <BodyWrapper>
          {
            threeJValues[0]>0 &&<Lattice3JChart threeJValues={threeJValues} />

          }
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
    max-width: 50%;
    min-width: 48%;
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
    background-color: white;
    margin: 25px;
    border-radius:10px;
    padding: 20px;
    @media (max-width: 876px) {
      max-width: 100%;
    /* min-width: 100%; */
      /* width: 90%; */
  }
`
export default App;
