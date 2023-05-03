import styled from "styled-components";
// import Lattice2JForm from './components/Lattice2JForm';
// import Lattice3JForm from './components/Lattice3JForm';
// import Lattice2JChart from './components/Lattice2JChart';
// import Lattice3JChart from './components/Lattice3JChart';
import { useState } from "react";
import LatticeForm from "./components/LatticeForm";
import { Button, Stack, TextField, ToggleButtonGroup } from "@mui/material";
// import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormExample from "./components/FormExample"

function App() {
  // const [twoJValues, setTwoJValues] = useState([0,0,0,0,0,0])
  const [threeJValues, setThreeJValues] = useState([0,0,[],[],[],0])
  const [numOfJ, setNumOfJ] = useState('TwoJunctions');
  const [numOfJunctions, setNumOfJunctions] = useState("");
  const [numOfJunctionsSended, setNumOfJunctionsSended] = useState(""); 
    function handleFormOfProblem(event) {
      setNumOfJunctionsSended(numOfJunctions)
    }
    const handleChangeJ = (event) => {
    // setNumOfJ(currentNumOfJ);
    // console.log(numOfJunctions);
    // setThreeJValues([0,0,0,0,0,0,0,0,0,0])
    };

  // const handleChangeJ = (event, currentNumOfJ) => {
  //   setNumOfJ(currentNumOfJ);
  //   // setTwoJValues([0,0,0,0,0,0])
  //   setThreeJValues([0,0,0,0,0,0,0,0,0])
  //   console.log(currentNumOfJ);
  // };
  return (
    <Wrapper>
      <ProjectTitle>
          Bewley Lattice diagram
      </ProjectTitle>
      <LayoutWrapper>
        <SidebarWrapper>
          <ToggleButtonGroup
          color="primary"
          value={numOfJ}
          exclusive
          onChange={handleChangeJ}
          >
            <Stack 
            style={{display:`${numOfJunctionsSended?"none":"block"}`}} 
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
            <Button variant="outlined" color="secondary" onClick={handleFormOfProblem}>Create</Button>
            </Stack>   
          </ToggleButtonGroup>
            {/* numOfJ === "TwoJunctions"? 
            <Lattice2JForm setTwoJValues={setTwoJValues} />:
            <Lattice3JForm numOfJ={numOfJ} setNumOfJ={setNumOfJ} setThreeJValues={setThreeJValues} />

            <LatticeForm numOfJunctions={numOfJunctions} /> */}
            {
              numOfJunctionsSended ? <FormExample setThreeJValues={setThreeJValues} numOfJunctions={numOfJunctions} setNumOfJunctions={setNumOfJunctions} setNumOfJunctionsSended={setNumOfJunctionsSended} numOfJunctionsSended = {numOfJunctionsSended} /> : null
            }
        </SidebarWrapper>
        <BodyWrapper>
        {
            // numOfJ === "TwoJunctions"? 
            // <Lattice2JChart twoJValues={twoJValues} />:
            // <Lattice3JChart numOfJ={numOfJ} threeJValues={threeJValues} />
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
    /* max-width: 40rem; */
    @media (max-width: 876px) {
      /* width: 90%; */
      margin-right: 25px;
  }
`
const BodyWrapper = styled.div`
    background-color: white;
    margin: 25px;
    border-radius:10px;
    padding: 20px;
`
export default App;
