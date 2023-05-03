import React, { useState } from 'react'
import { FormControlLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import styled from "styled-components";

const LatticeForm = ({numOfJunctions}) => {
    let numOfInputFields = Array(numOfJunctions).join().split(",")
    // console.log([...numOfInputFields,""]);
    const [lineType, setLineType] = useState("series");
    const [impedanceType, setImpedanceType] = useState("Z");
    const [impedance, setImpedance] = useState([""])
    const [Z1, setZ1] = useState([""]);
    const [inductance, setInductance] = useState([...numOfInputFields,""])
    const [capacitance, setCapacitance] = useState(numOfInputFields.push(""))
    const [Length, setLength] = useState(numOfInputFields.push(""))
    const [Velocity, setVelocity] = useState(numOfInputFields.push(""))

    const handleChangeJ = (event, currentNumOfJ) => {
        
        };
    function handleSubmit(event) {
            event.preventDefault();
        }
    const handleLineTypeRadio = (event) => {
            setLineType(event.target.value);
        };
    const handleImpedanceTypeRadio= (event) => {
            setImpedanceType(event.target.value);
        }
    return (

      <>
      <div>{numOfJunctions}</div>
    <FormTitle>{numOfJunctions} junctions data</FormTitle>
    <FormWrapper onSubmit={handleSubmit}>
            <Stack>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={lineType}
                    onChange={handleLineTypeRadio}
                    >
                    <FormControlLabel value="series" control={<Radio />} label="series" />
                    <FormControlLabel value="TJunction" control={<Radio />} label="T junction" />
                </RadioGroup>
            </Stack>
            <Stack>
                    <RadioGroup
                    name="controlled-radio-buttons-group-two"
                    value={impedanceType}
                    onChange={handleImpedanceTypeRadio}
                    >
                    <FormControlLabel value="Z" control={<Radio />} label="Z" />
                    <FormControlLabel value="L&C" control={<Radio />} label="L&C" />
                    </RadioGroup>
                </Stack>
                { 
                impedanceType==="Z" ?
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`Z${impedance[0]} (&#8486;)`}
                        onChange={e => {
                            console.log(e.target.value)
                            
                            console.log(impedance);
                        }}
                        value={impedance}
                        fullWidth
                        required
                
                    />
                    </Stack>:
                    <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`L${inductance[0]} (H)`}
                        onChange={e => setInductance((prevValue)=>prevValue[0]=e.target.value)}
                        value={inductance[0]}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label= {`${capacitance[0]} (F)`}
                        onChange={e => setCapacitance((prevValue)=>prevValue[0]=e.target.value)}
                        value={capacitance[0]}
                        fullWidth
                        required
                     />
                </Stack>
            }
    </FormWrapper>
    </>
  )
}
const FormTitle = styled.h2`
color: #2276FF;
`
const FormWrapper = styled.form`
`

export default LatticeForm