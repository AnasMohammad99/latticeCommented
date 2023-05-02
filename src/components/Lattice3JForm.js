import React, {useState} from 'react';
import { TextField, Button, Stack, Checkbox, Radio, RadioGroup, FormControlLabel, ToggleButtonGroup, ToggleButton } from '@mui/material';
import styled from 'styled-components';
 
 
const LatticeForm = ({numOfJ, setNumOfJ, setThreeJValues}) => {
    const [amplitude, setAmplitude] = useState("");
    const [Z1, setZ1] = useState("");
    const [Z2, setZ2] = useState("");
    const [Z3, setZ3] = useState("");
    const [Z4Inf, setZ4Inf] = useState(false);
    const [Z4, setZ4] = useState("");
    const [Z5, setZ5] = useState("");
    const [L1, setL1] = useState("");
    const [L2, setL2] = useState("");
    const [L3, setL3] = useState("");
    const [L4, setL4] = useState("");
    const [L5, setL5] = useState("");
    const [C1, setC1] = useState("");
    const [C2, setC2] = useState("");
    const [C3, setC3] = useState("");
    const [C4, setC4] = useState("");
    const [C5, setC5] = useState("");
    const [len1, setLen1] = useState("");
    const [len2, setLen2] = useState("");
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    // const [NumOfJ,, setNumOfJ,] = useState("2J")
    const [lineType, setLineType] = useState("series");
    const [impedanceType, setImpedanceType] = useState("Z");
    // const [numOfJ, setNumOfJ] = useState('TwoJunctions');
    const [addFault, setAddFault] = useState(false)
    const [faultLength, setFaultLength] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log([numOfJ,Z5,L5,C5,addFault,impedanceType]);
        numOfJ==="TwoJunctions"&Z5===""&addFault===false&impedanceType==="Z"?setThreeJValues([+amplitude, numOfJ, +Z1, +Z2, +Z2, +Z4, +len1/2, +len1/2, +v1, +v1]):
        numOfJ==="TwoJunctions"&L5===""&addFault===false&impedanceType!=="Z"?setThreeJValues([+amplitude, numOfJ, Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), Math.sqrt(+L2/+C2), Math.sqrt(+L4/+C4), +len1/2, +len1/2, +v1, +v1]):
        numOfJ==="TwoJunctions"&Z5===""&addFault===true&impedanceType==="Z"?setThreeJValues([+amplitude, "ThreeJunctions", +Z1, +Z2, 1e-15, +Z4, +faultLength, +len1 - (+faultLength), +v1, +v1]):
        numOfJ==="TwoJunctions"&L5===""&addFault===true&impedanceType!=="Z"?setThreeJValues([+amplitude, "ThreeJunctions", Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), 1e-15, Math.sqrt(+L4/+C4), +faultLength, +len1 - (+faultLength), +v1, +v1]):
        numOfJ==="TwoJunctions"&Z5!==""&addFault===false&impedanceType==="Z"?setThreeJValues([+amplitude, numOfJ, +Z1, +Z2, +Z2, [+Z4, +Z5], +len1/2, +len1/2, +v1, +v1]):
        numOfJ==="TwoJunctions"&L5!==""&addFault===false&impedanceType!=="Z"?setThreeJValues([+amplitude, numOfJ, Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), Math.sqrt(+L2/+C2), [Math.sqrt(+L4/+C4), Math.sqrt(+L5/+C5)], +len1/2, +len1/2, +v1, +v1]):
        numOfJ==="TwoJunctions"&Z5!==""&addFault===true&impedanceType==="Z"?setThreeJValues([+amplitude, "ThreeJunctions", +Z1, +Z2, 1e-15, [+Z4, +Z5], +faultLength, +len1 - (+faultLength), +v1, +v1]):
        numOfJ==="TwoJunctions"&L5!==""&addFault===true&impedanceType!=="Z"?setThreeJValues([+amplitude, "ThreeJunctions", Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), 1e-15, [Math.sqrt(+L4/+C4), Math.sqrt(+L5/+C5)], +faultLength, +len1 - (+faultLength), +v1, +v1]):
        numOfJ==="ThreeJunctions"&Z5===""&impedanceType==="Z"?setThreeJValues([+amplitude, numOfJ, +Z1, +Z2, +Z3, +Z4, +len1, +len2, +v1, +v2]):
        numOfJ==="ThreeJunctions"&L5===""&impedanceType!=="Z"?setThreeJValues([+amplitude, numOfJ, Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), Math.sqrt(+L3/+C3), Math.sqrt(+L4/+C4), +len1, +len2, +v1, +v2]):
        numOfJ==="ThreeJunctions"&Z5!==""&impedanceType==="Z"?setThreeJValues([+amplitude, numOfJ, +Z1, +Z2, +Z3, [+Z4, +Z5], +len1, +len2, +v1, +v2]):
        numOfJ==="ThreeJunctions"&L5!==""&impedanceType!=="Z"?setThreeJValues([+amplitude, numOfJ, Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), Math.sqrt(+L3/+C3), [Math.sqrt(+L4/+C4), Math.sqrt(+L5/+C5)], +len1, +len2, +v1, +v2]):setThreeJValues([0,0,0,0,0,0,0,0,0])
    }
    const handleLineTypeRadio = (event) => {
        setLineType(event.target.value);
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setL5("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setC5("");
        setLen1("");
        setV1("");
        setLen2("");
        setV2("");
        setAmplitude("");
        setZ4Inf(false);
        setAddFault(false)
        setFaultLength("")
        // setImpedanceType("Z")
    };
    const handleImpedanceTypeRadio= (event) => {
        setImpedanceType(event.target.value);
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setL5("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setC5("");
        setLen1("");
        setV1("");
        setLen2("");
        setV2("");
        setAmplitude("");
        setZ4Inf(false);
        setAddFault(false)
        setFaultLength("")
    }
  
    function handleExampleOne(event){
        event.preventDefault();
        setZ1(400)
        setZ2(100)
        setZ3(100)
        setZ4(Infinity)
        setZ5("")
        setLen1(300)
        setV1(150)
        setLen2(300/2)//we will send this value to calculations two times
        setV2(150)//we will send this value to calculations two times
        setAmplitude(100)
        setZ4Inf(true)
        setAddFault(false)
        setFaultLength("")
        setImpedanceType("Z")
    }
    function handleExampleTwo(event){
        event.preventDefault();
        setZ1(500)
        setZ2(100)
        setZ3(100)
        setZ4(Infinity)
        setZ5(250)
        setLen1(500)
        setV1(250)
        setLen2(500/2)//we will send this value to calculations two times
        setV2(250)//we will send this value to calculations two times
        setAmplitude(50)
        setZ4Inf(true)
        setAddFault(false)
        setFaultLength("")
        setImpedanceType("Z")
    }  
    function handleExampleThree(event){
        event.preventDefault();
        setZ1(1e-15)
        setZ2(400)
        setZ3(40)
        setZ4(Infinity)
        setZ5("")
        setLen1(450)
        setLen2(300)
        setV1(300)
        setV2(150)
        setAmplitude(.5)
        setZ4Inf(true)
        setAddFault(false)
        setFaultLength("")
        setImpedanceType("Z")
    }
    function handleExampleFour(event){
        event.preventDefault();
        setZ1(500)
        setZ2(100)
        setZ3(250)
        setZ4(Infinity)
        setZ5(300)
        setLen1(300)
        setV1(200)
        setLen2(500)
        setV2(250)
        setAmplitude(50)
        setZ4Inf(true)
        setAddFault(false)
        setFaultLength("")
        setImpedanceType("Z")
    }
    
    function handleReset(event){
        event.preventDefault();
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setL5("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setC5("");
        setLen1("");
        setV1("");
        setLen2("");
        setV2("");
        setAmplitude("");
        setZ4Inf(false);
        setAddFault(false)
        setFaultLength("")
        setImpedanceType("Z")
    }
    const handleChangeJ = (event, currentNumOfJ) => {
        setNumOfJ(currentNumOfJ);
        // setTwoJValues([0,0,0,0,0,0])
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setL5("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setC5("");
        setLen1("");
        setV1("");
        setLen2("");
        setV2("");
        setAmplitude("");
        setZ4Inf(false);
        setAddFault(false)
        setFaultLength("")
        setThreeJValues([0,0,0,0,0,0,0,0,0,0])
      };
    return (
        <Wrapper>
            <ToggleButtonGroup
            color="primary"
            value={numOfJ}
            exclusive
            onChange={handleChangeJ}
            >
                <ToggleButton value="TwoJunctions">2 Junctions</ToggleButton>
                <ToggleButton value="ThreeJunctions">3 Junctions</ToggleButton>
            </ToggleButtonGroup>
            <FormTitle>
                {
                    numOfJ==="ThreeJunctions"?"3 junctions Data":"2 junctions Data"
                }
                </FormTitle>
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
                                label="Z1 (&#8486;)"
                                onChange={e => setZ1(e.target.value)}
                                value={Z1}
                                fullWidth
                                required
                            />
                            <TextField
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label="Z2 (&#8486;)"
                                onChange={e => setZ2(e.target.value)}
                                value={Z2}
                                fullWidth
                                required
                            />
                            {
                                numOfJ==="ThreeJunctions"?<TextField
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label="Z3 (&#8486;)"
                                onChange={e => setZ3(e.target.value)}
                                value={`${Z3}`}
                                fullWidth
                                required
                            />:
                            <TextField
                                style={{display:"none"}}
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label="Z3===Z2 (&#8486;)"
                                value={Z2}
                                fullWidth
                                required
                            />
                            }
                            <TextField
                                type={Z4Inf?"text":"number"}
                                variant='outlined'
                                color='secondary'
                                label={`${numOfJ==="ThreeJunctions"?"Z4 (\u03A9)":"Z3 (\u03A9)"}`}
                                onChange={e => Z4Inf?setZ4(Infinity):setZ4(e.target.value)}
                                value={`${Z4}`}
                                fullWidth
                                required
                            />
                            <FormControlLabel control={<Checkbox checked={Z4Inf} onChange={e => {
                                setZ4Inf(!Z4Inf);
                                setZ4(Infinity);
                                return 0
                            }} />} label={`${numOfJ==="ThreeJunctions"?"Z4 Inf":"Z3 Inf"}`} />
                            {
                                lineType==="TJunction"&&<TextField
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label={`${numOfJ==="ThreeJunctions"?"Z5 (\u03A9)":"Z4 (\u03A9)"}`}
                                onChange={e => setZ5(e.target.value)}
                                value={Z5}
                                fullWidth
                                required
                            />
                            }
                        </Stack>:
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                <TextField
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label="L1 (H)"
                                    onChange={e => setL1(e.target.value)}
                                    value={L1}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label="C1 (F)"
                                    onChange={e => setC1(e.target.value)}
                                    value={C1}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                <TextField
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label="L2 (H)"
                                    onChange={e => setL2(e.target.value)}
                                    value={L2}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    type="number"
                                    variant='outlined'
                                    color='secondary'
                                    label="C2 (F)"
                                    onChange={e => setC2(e.target.value)}
                                    value={C2}
                                    fullWidth
                                    required
                                />
                            </Stack>
                            {
                                numOfJ==="ThreeJunctions"?
                                <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="L3 (H)"
                                        onChange={e => setL3(e.target.value)}
                                        value={L3}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="C3 (F)"
                                        onChange={e => setC3(e.target.value)}
                                        value={C3}
                                        fullWidth
                                        required
                                    />
                                </Stack>:
                                <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                    <TextField
                                        style={{display:"none"}}
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="L3===L2 (H)"
                                        // onChange={e => setL3(e.target.value)}
                                        value={L2}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        style={{display:"none"}}
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label="C3===C2 (F)"
                                        // onChange={e => setC3(e.target.value)}
                                        value={C2}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                            }
                                <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label={`${numOfJ==="ThreeJunctions"?"L4 (F)":"L3 (F)"}`}
                                        onChange={e => setL4(e.target.value)}
                                        value={L4}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label={`${numOfJ==="ThreeJunctions"?"C4 (F)":"C3 (F)"}`}
                                        onChange={e => setC4(e.target.value)}
                                        value={C4}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                            {
                                lineType==="TJunction"&&
                                <Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label={`${numOfJ==="ThreeJunctions"?"L5 (H)":"L4 (H)"}`}
                                        onChange={e => setL5(e.target.value)}
                                        value={L5}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        type="number"
                                        variant='outlined'
                                        color='secondary'
                                        label={`${numOfJ==="ThreeJunctions"?"C5 (F)":"C4 (F)"}`}
                                        onChange={e => setC5(e.target.value)}
                                        value={C5}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                            }
                        </Stack>
                }
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Amplitude Volt (KV)"
                    onChange={e => setAmplitude(e.target.value)}
                    value={amplitude}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Stack spacing={2} direction="row">
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={numOfJ==="ThreeJunctions"?"line 1 length (m)":"line length (m)"}
                        onChange={e => setLen1(e.target.value)}
                        value={len1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                        />
                        {
                            numOfJ==="ThreeJunctions"?<TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="line 2 length (m)"
                            onChange={e => setLen2(e.target.value)}
                            value={len2}
                            fullWidth
                            required
                            sx={{mb: 4}}
                            />:
                            <TextField
                            style={{display:"none"}}
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="line 2 === line 1 length (m)"
                            // onChange={e => setLen2(e.target.value)}
                            value={len1}
                            fullWidth
                            required
                            sx={{mb: 4}}
                            />
                        }
                </Stack>
                <Stack spacing={2} direction="row">
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label={numOfJ==="ThreeJunctions"?"line 1 velocity (m/\xB5s)":"line velocity (m/\xB5s)"}
                        onChange={e => setV1(e.target.value)}
                        value={v1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    {
                        numOfJ==="ThreeJunctions"?<TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="line 2 velocity (m/&micro;s)"
                        onChange={e => setV2(e.target.value)}
                        value={v2}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />:
                    <TextField
                    style={{display:"none"}}
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="line 2 velocity (m/&micro;s)"
                        onChange={e => setV2(e.target.value)}
                        value={v1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    }
                </Stack>
                {
                    numOfJ==="TwoJunctions"&&
                    <>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <FormControlLabel control={<Checkbox checked={addFault} onChange={e => setAddFault(!addFault)} />} label={"Add Fault"} />
                        {
                            addFault&&<TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="length from junction A (m)"
                            onChange={e =>setFaultLength(e.target.value) }
                            value={faultLength}
                            fullWidth
                            required
                            />
                        }
                        </Stack>
                    </>
                }

                <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
                        <Button variant="outlined" color="secondary" type="submit">Draw</Button>
                        {
                            impedanceType==="Z"&&
                            (lineType==="series"&numOfJ==="TwoJunctions"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleOne}>Example 1</Button>:
                            lineType==="TJunction"&numOfJ==="TwoJunctions"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleTwo}>Example 2</Button>:
                            lineType==="series"&numOfJ==="ThreeJunctions"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleThree}>Example 3</Button>:
                            lineType==="TJunction"&numOfJ==="ThreeJunctions"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleFour}>Example 4</Button>:
                            null)
                        }
                        {/* {
                            lineType==="series"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleThree}>Example 3</Button> :
                            lineType==="TJunction"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleFour}>Example 4</Button>:
                            null
                        } */}
                        <Button variant="outlined" color="secondary" onClick={handleReset}>Reset</Button>
                </Stack>
            </FormWrapper>     
        </Wrapper>
    )
}
const Wrapper = styled.div`
`
const FormWrapper = styled.form`
`
const FormTitle = styled.h2`
color: #2276FF;
`
 
export default LatticeForm;
