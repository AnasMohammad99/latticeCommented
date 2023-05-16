import { Button, Checkbox, FormControlLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material"
import { useState } from "react"
import styled from 'styled-components';

function LatticeForm({setThreeJValues, numOfJunctionsSended, setNumOfJunctionsSended, setNumOfJunctions, numOfJunctions}) {
    
    const IMPEDANCE_LIST = Array.from({ length:  (+numOfJunctionsSended+1)}, () => "")
    const IMPEDANCE_T_LIST = Array.from({ length:  (+numOfJunctionsSended+2)}, () => "")
    const LENGTH_VELOCITY_LIST = Array.from({ length:  (+numOfJunctionsSended-1)}, () => "")
    const [amplitude, setAmplitude] = useState("");
    const [numOfIterations, setNumOfIterations] = useState("");
    const [impedance, setImpedance] = useState([...IMPEDANCE_LIST]);
    const [inductance, setInductance] = useState([...IMPEDANCE_LIST])
    const [capacitance, setCapacitance] = useState([...IMPEDANCE_LIST])
    const [impedanceT, setImpedanceT] = useState([...IMPEDANCE_T_LIST]);
    const [inductanceT, setInductanceT] = useState([...IMPEDANCE_T_LIST])
    const [capacitanceT, setCapacitanceT] = useState([...IMPEDANCE_T_LIST])
    const [length, setLength] = useState([...LENGTH_VELOCITY_LIST])
    const [velocity, setVelocity] = useState([...LENGTH_VELOCITY_LIST])
    const [impedanceType, setImpedanceType] = useState("Z");
    const [lineType, setLineType] = useState("series");
    const [addFault, setAddFault] = useState(false)
    const [faultLength, setFaultLength] = useState("");
    const [numOfSection, setNumOfSection] = useState("");
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
    const changeOneImpedanceT = (index, newValue) => {
        setImpedanceT(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneInductanceT = (index, newValue) => {
        setInductanceT(existingItems=>{
            return[
                ...existingItems.slice(0,index),
                newValue===""?newValue:+newValue,
                ...existingItems.slice(index + 1),
            ]
        })
    }
    const changeOneCapacitanceT = (index, newValue) => {
        setCapacitanceT(existingItems=>{
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
    let newZT = []
    function handleSubmit(event) {
        event.preventDefault();
        let twoJV = []
        let twoJL = []
        if(lineType!=="TJunction"&impedanceType==="Z"&+numOfJunctions!==2){
            newZT = impedance

        }else if(lineType==="TJunction"&impedanceType==="Z"&+numOfJunctions!==2){
            for (let i = 0; i < impedanceT.length; i++) {
                if(i===impedanceT.length-2){
                  newZT.push([+impedanceT[i],+impedanceT[i+1]])
                  break;
                }newZT.push(+impedanceT[i])
              }
        }else if(lineType!=="TJunction"&impedanceType!=="Z"&+numOfJunctions!==2){
            for (let i = 0; i < inductance.length; i++) {
                newZT.push(Math.sqrt(+inductance[i]/+capacitance[i]))
            }

        }else if(lineType==="TJunction"&impedanceType!=="Z"&+numOfJunctions!==2){
            for (let i = 0; i < inductanceT.length; i++) {
                if(i===inductanceT.length-2){
                  newZT.push([Math.sqrt(+inductanceT[i]/+capacitanceT[i]),Math.sqrt(+inductanceT[i+1]/+capacitanceT[i+1])])
                  break;
                }newZT.push(Math.sqrt(+inductanceT[i]/+capacitanceT[i]))
              }
        }
        if(+numOfJunctions===2){
            twoJL.push(length[0]/2)
            twoJL.push(length[0]/2)
            twoJV.push(velocity[0])
            twoJV.push(velocity[0])
        }
        if(impedanceType==="Z"&+numOfJunctions===2&lineType==="series"){
            for (let i = 0; i < impedance.length; i++) {
                if(i===1)newZT.push(+impedance[i])
                newZT.push(+impedance[i])
                } 
        }else if(impedanceType!=="Z"&+numOfJunctions===2&lineType==="series"){
            for (let i = 0; i < inductance.length; i++) {
                if(i===1) newZT.push(Math.sqrt(+inductance[i]/+capacitance[i]))
                newZT.push(Math.sqrt(+inductance[i]/+capacitance[i]))
                }
        }else if(impedanceType==="Z"&+numOfJunctions===2&lineType==="TJunction"){
            for (let i = 0; i < impedanceT.length; i++) {
                if(i===1)newZT.push(+impedanceT[i])              
                if(i===impedanceT.length-2){
                    newZT.push([+impedanceT[i], +impedanceT[i+1]])
                    break
                }newZT.push(+impedanceT[i])
                } 
        }else if(impedanceType!=="Z"&+numOfJunctions===2&lineType==="TJunction"){
            for (let i = 0; i < inductanceT.length; i++) {  
                if(i===1) newZT.push(Math.sqrt(+inductanceT[i]/+capacitanceT[i]))            
                if(i===inductanceT.length-2){
                    newZT.push([Math.sqrt(+inductanceT[i]/+capacitanceT[i]),Math.sqrt(+inductanceT[i+1]/+capacitanceT[i+1])])
                    break;
                  }newZT.push(Math.sqrt(+inductanceT[i]/+capacitanceT[i]))
                }
        }
        
        
        +numOfJunctions!==2&addFault===false?setThreeJValues([+amplitude, +numOfJunctions, newZT, length, velocity, 0,numOfIterations]):
        +numOfJunctions===2&addFault===false?setThreeJValues([+amplitude, 3, newZT, twoJL, twoJV, 1,numOfIterations]):
        +numOfJunctions!==2&addFault===true?setThreeJValues([+amplitude, +numOfJunctions+1, [...newZT.slice(0,numOfSection),0,...newZT.slice(numOfSection,)], [...length.slice(0,numOfSection-1),+faultLength,length[numOfSection-1]-+faultLength,...length.slice(numOfSection,)], [...velocity.slice(0,numOfSection),velocity[numOfSection-1],...velocity.slice(numOfSection,)], 0,numOfIterations]):
        +numOfJunctions===2&addFault===true?setThreeJValues([+amplitude, 3, [...newZT.slice(0,2),0,...newZT.slice(3,)], [+faultLength,(twoJL[0]*2-+faultLength)], twoJV, 1,numOfIterations]):
        setThreeJValues([0,0,[0],[0],[0],0,0])
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
    function handleExampleOne(event){
        event.preventDefault();
        setNumOfIterations(100)
        setImpedance([400,100,9e15])
        setAmplitude(100)
        setLength([300])
        setVelocity([150])  
    }
    function handleExampleTwo(event){
        event.preventDefault();
        setNumOfIterations(100)
        setImpedanceT([500,100,9e15,250])
        setAmplitude(50)
        setLength([500])
        setVelocity([250])  
    }
    function handleExampleThree(event){
        event.preventDefault();
        setNumOfIterations(1000)
        setImpedance([0,400,40,9e15])
        setAmplitude(.5)
        setLength([450,300])
        setVelocity([300,150])  
    }
  return (
    <div className="LatticeForm">
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
        <Stack spacing={2} direction="row">
            <TextField
                type="number"
                variant='outlined'
                color='secondary'
                label="numOfIterations"
                onChange={e => setNumOfIterations(e.target.value)}
                value={numOfIterations}
                fullWidth
                sx={{mb: 2}}
            />
        </Stack>
        <Stack style={{overflowX:"scroll"}} spacing={2} direction="row" sx={{marginBottom: 2}}>
            {
                impedanceType==="Z"&lineType==="series"?
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
                }):
                impedanceType!=="Z"&lineType==="series"?
                <Stack spacing={2} direction="column">
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
                </Stack>:
                impedanceType==="Z"&lineType!=="series"?
                impedanceT.map((item, i)=>{
                    return(
                        <TextField
                        style={{minWidth:"10rem"}}
                        key={i}
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={`Z${i+1} (\u2126)`}
                        onChange={(e)=>changeOneImpedanceT(i, e.target.value)}
                        value={item}                    
                        required
                        />
                    )
                }):
                <Stack spacing={2} direction="column">
                <Stack  spacing={2} direction="row">
                    {
                        inductanceT.map((item, i)=>{
                            return(
                                    <TextField
                                    style={{minWidth:"10rem"}}
                                    key={i}
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label={`L${i+1} (H)`}
                                    onChange={(e)=>changeOneInductanceT(i, e.target.value)}
                                    value={item}                    
                                    required
                                    />
                            )
                        })
                    }
                    </Stack>
                    <Stack spacing={2} direction="row">
                    {
                        capacitanceT.map((item, i)=>{
                            return(
                                    <TextField
                                    style={{minWidth:"10rem"}}
                                    key={i}
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label={`C${i+1} (F)`}
                                    onChange={(e)=>changeOneCapacitanceT(i, e.target.value)}
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
                        label={`Length ${i+1} (m)`}
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
                        label={`Velocity ${i+1} (m/\xB5s)`}
                        onChange={(e)=>changeOneVelocity(i, e.target.value)}
                        value={item}                    
                        required
                        />
                    )
                })
            }
        </Stack>
        <Stack style={{overflowX:"scroll"}} spacing={2} direction="row" sx={{marginBottom: 2}}>
        <Stack spacing={2} direction="row"  style={{width:"100%", justifyContent:"space-between"}} sx={{marginBottom: 4}}>
                        <FormControlLabel control={<Checkbox checked={addFault} onChange={e => setAddFault(!addFault)} />} label={addFault?"short circuit at : ":"Add phase to ground short circuit"} />
                        {/* <Checkbox checked={addFault} onChange={e => setAddFault(!addFault)} /> */}
                        {
                            addFault&&<Stack spacing={2} direction="column" sx={{marginBottom: 2}}>
                                        <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="num of section"
                                        onChange={e =>setNumOfSection(e.target.value) }
                                        value={numOfSection}
                                        required
                                        />
                                        <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="length (m)"
                                        onChange={e =>setFaultLength(e.target.value) }
                                        value={faultLength}
                                        fullWidth
                                        required
                                        />
                            
                            </Stack>
                        }
                        </Stack>
        </Stack>
        {/* <Checkbox />
        <FormControl fullWidth>
        <InputLabel id="select-label">number of junction</InputLabel>
        <Select
          id="simple-select"
          label="add fault after junction"
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
        <TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="length from junction A (m)"
                            
                            
                            fullWidth
                            required
                            />
      </FormControl> */}
        <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
            <Button variant="outlined" color="secondary" type="submit">Draw</Button>
            {
                +numOfJunctionsSended===2&impedanceType==="Z"&lineType==="series"?
                <Button variant="outlined" color="secondary" onClick={handleExampleOne}>Example One</Button>:
                +numOfJunctionsSended===2&impedanceType==="Z"&lineType!=="series"?
                <Button variant="outlined" color="secondary" onClick={handleExampleTwo}>Example Two</Button>:
                +numOfJunctionsSended===3&impedanceType==="Z"&lineType==="series"?
                <Button variant="outlined" color="secondary" onClick={handleExampleThree}>Example Three</Button>:null
            }
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
export default LatticeForm
