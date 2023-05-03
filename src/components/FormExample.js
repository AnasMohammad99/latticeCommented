import { Button, FormControlLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material"
import { useState } from "react"
import styled from 'styled-components';

function FormExample({setThreeJValues, numOfJunctionsSended, setNumOfJunctionsSended, setNumOfJunctions, numOfJunctions}) {
    
    const IMPEDANCE_LIST = Array.from({ length:  (+numOfJunctionsSended+1)}, () => "")
    const LENGTH_VELOCITY_LIST = Array.from({ length:  (+numOfJunctionsSended-1)}, () => "")
    const [amplitude, setAmplitude] = useState("");
    const [impedance, setImpedance] = useState([...IMPEDANCE_LIST]);
    const [inductance, setInductance] = useState([...IMPEDANCE_LIST])
    const [capacitance, setCapacitance] = useState([...IMPEDANCE_LIST])
    const [length, setLength] = useState([...LENGTH_VELOCITY_LIST])
    const [velocity, setVelocity] = useState([...LENGTH_VELOCITY_LIST])
    const [impedanceType, setImpedanceType] = useState("Z");
    const [lineType, setLineType] = useState("series");
    const changeOneImpedance = (index, newValue) => {
        setImpedance(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneInductance = (index, newValue) => {
        setInductance(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneCapacitance = (index, newValue) => {
        setCapacitance(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneLength = (index, newValue) => {
        setLength(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneVelocity = (index, newValue) => {
        setVelocity(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    function handleSubmit(event) {
        event.preventDefault();

        let LCImp = []
        for (let i = 0; i < inductance.length; i++) {
            LCImp.push(Math.sqrt(+inductance[i]/+capacitance[i]))   
        } 
        impedanceType==="Z"&+numOfJunctions!==2?setThreeJValues([+amplitude, +numOfJunctions, impedance, length, velocity]):
        impedanceType!=="Z"&+numOfJunctions!==2?setThreeJValues([+amplitude, +numOfJunctions, LCImp, length, velocity]):
        impedanceType==="Z"&+numOfJunctions===2?setThreeJValues([+amplitude, 3, LCImp, length, velocity,1]):setThreeJValues([+amplitude, 3, LCImp, length, velocity, 1])
    }
    function handleReset(event){
        event.preventDefault();
        setNumOfJunctionsSended("")
        setNumOfJunctions("")
        setThreeJValues([0,0,[0],[0],[0],0])
    }
    const handleImpedanceTypeRadio= (event) => {
        setImpedanceType(event.target.value);
        setAmplitude("");
        setImpedance([...IMPEDANCE_LIST]);
        setInductance([...IMPEDANCE_LIST]);
        setCapacitance([...IMPEDANCE_LIST]);
        setLength([...LENGTH_VELOCITY_LIST]);
        setVelocity([...LENGTH_VELOCITY_LIST]);
    }
    const handleLineTypeRadio = (event) => {
        setLineType(event.target.value);
        setAmplitude("");
        setImpedance([...IMPEDANCE_LIST]);
        setInductance([...IMPEDANCE_LIST]);
        setCapacitance([...IMPEDANCE_LIST]);
        setLength([...LENGTH_VELOCITY_LIST]);
        setVelocity([...LENGTH_VELOCITY_LIST]);
        
    };
  return (
    <div className="FormExample">
        <FormTitle>{numOfJunctions} junctions data</FormTitle>
        <FormWrapper onSubmit={handleSubmit}>
        <Stack>
                <RadioGroup
                name="controlled-radio-buttons-group-one"
                value={lineType}
                onChange={handleLineTypeRadio}
                >
                    <FormControlLabel value="series" control={<Radio />} label="series" />
                    <FormControlLabel value="TJunction" control={<Radio />} label="T Junction" />
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
        <Stack style={{overflowX:"scroll"}} spacing={2} direction="row" sx={{marginBottom: 2}}>
            {
                impedanceType==="Z"?
                impedance.map((item, i)=>{
                    return(
                        <TextField
                        style={{minWidth:"10rem"}}
                        key={i}
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`Z${i+1} (\u2126)`}
                        onChange={(e)=>changeOneImpedance(i, e.target.value)}
                        value={item}                    
                        required
                        />
                    )
                }):<Stack spacing={2} direction="column">
                <Stack  spacing={2} direction="row">
                    {
                        inductance.map((item, i)=>{
                            return(
                                    <TextField
                                    style={{minWidth:"10rem"}}
                                    key={i}
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label={`L${i+1} (H)`}
                                    onChange={(e)=>changeOneInductance(i, e.target.value)}
                                    value={item}                    
                                    required
                                    />
                            )
                        })
                    }
                    </Stack>
                    <Stack spacing={2} direction="row">
                    {
                        capacitance.map((item, i)=>{
                            return(
                                    <TextField
                                    style={{minWidth:"10rem"}}
                                    key={i}
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label={`C${i+1} (F)`}
                                    onChange={(e)=>changeOneCapacitance(i, e.target.value)}
                                    value={item}                    
                                    required
                                    />
                            )
                        })
                    }
                    </Stack>
                </Stack>
            }
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField
                type="number"
                variant='outlined'
                color='secondary'
                label="Amplitude Volt (KV)"
                onChange={e => setAmplitude(e.target.value)}
                value={amplitude}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Stack style={{overflowX:"scroll"}} spacing={2} direction="row" sx={{marginBottom: 2}}>
            {
                length.map((item, i)=>{
                    return(

                        <TextField
                        style={{minWidth:"10rem"}}
                        key={i}
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`L${i+1} (m)`}
                        onChange={(e)=>changeOneLength(i, e.target.value)}
                        value={item}                    
                        required
                        />
                    )
                })
            }
            </Stack>
            <Stack style={{overflowX:"scroll"}} spacing={2} direction="row" sx={{marginBottom: 2}}>
            {
                velocity.map((item, i)=>{
                    return(

                        <TextField
                        style={{minWidth:"10rem"}}
                        key={i}
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`V${i+1} (m/\xB5s)`}
                        onChange={(e)=>changeOneVelocity(i, e.target.value)}
                        value={item}                    
                        required
                        />
                    )
                })
            }
            </Stack>
            <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
            <Button variant="outlined" color="secondary" type="submit">Draw</Button>
            <Button variant="outlined" color="secondary" onClick={handleReset}>Reset</Button>
            </Stack>
        </FormWrapper>
    </div>
  )
}
const FormTitle = styled.h2`
color: #2276FF;
`
const FormWrapper = styled.form`
`
export default FormExample
