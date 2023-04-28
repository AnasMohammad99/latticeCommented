import styled from "styled-components";
import LatticeForm from './components/LatticeForm';
import LatticeChart from './components/LatticeChart';
import { useState } from "react";

function App() {
  const [values, setValues] = useState([0,0,0,0,0,0])
  return (
    <Wrapper>
      <ProjectTitle>
        Bewley Lattice digram
      </ProjectTitle>
      <LayoutWrapper>
        <SidebarWrapper>
          <LatticeForm setValues={setValues} />
        </SidebarWrapper>
        <BodyWrapper>
          <LatticeChart values={values} />
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
    @media (max-width: 876px) {
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
