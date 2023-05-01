import styled from "styled-components";
// import Lattice2JForm from './components/Lattice2JForm';
import Lattice3JForm from './components/Lattice3JForm';
// import Lattice2JChart from './components/Lattice2JChart';
import Lattice3JChart from './components/Lattice3JChart';
import { useState } from "react";
// import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function App() {
  // const [twoJValues, setTwoJValues] = useState([0,0,0,0,0,0])
  const [threeJValues, setThreeJValues] = useState([0,0,0,0,0,0,0,0,0])
  const [numOfJ, setNumOfJ] = useState('TwoJunctions');

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
          {/* <ToggleButtonGroup
          color="primary"
          value={numOfJ}
          exclusive
          onChange={handleChangeJ}
          >
            <ToggleButton value="TwoJunctions">2 Junctions</ToggleButton>
            <ToggleButton value="ThreeJunctions">3 Junctions</ToggleButton>
          </ToggleButtonGroup> */}
          {
            // numOfJ === "TwoJunctions"? 
            // <Lattice2JForm setTwoJValues={setTwoJValues} />:
            <Lattice3JForm numOfJ={numOfJ} setNumOfJ={setNumOfJ} setThreeJValues={setThreeJValues} />
          }
        </SidebarWrapper>
        <BodyWrapper>
        {
            // numOfJ === "TwoJunctions"? 
            // <Lattice2JChart twoJValues={twoJValues} />:
            <Lattice3JChart numOfJ={numOfJ} threeJValues={threeJValues} />
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
