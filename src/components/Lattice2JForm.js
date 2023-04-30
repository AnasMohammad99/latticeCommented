import React, {useState} from 'react';
import { TextField, Button, Stack, Checkbox, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
 
 
const LatticeForm = ({setTwoJValues}) => {
    const [amplitude, setAmplitude] = useState("");
    const [Z1, setZ1] = useState("");
    const [Z2, setZ2] = useState("");
    const [Z3, setZ3] = useState("");
    const [L1, setL1] = useState("");
    const [L2, setL2] = useState("");
    const [L3, setL3] = useState("");
    const [L4, setL4] = useState("");
    const [C1, setC1] = useState("");
    const [C2, setC2] = useState("");
    const [C3, setC3] = useState("");
    const [C4, setC4] = useState("");
    const [Z3Inf, setZ3Inf] = useState(false);
    const [Z4, setZ4] = useState("");
    const [len1, setLen1] = useState("");
    const [v1, setV1] = useState("");
    const [lineType, setLineType] = useState("series");
    const [impedanceType, setImpedanceType] = useState("Z");

    const handleLineTypeRadio = (event) => {
        setLineType(event.target.value);
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setLen1("");
        setV1("");
        setAmplitude("");
        setZ3Inf(false);
    };
    const handleImpedanceTypeRadio= (event) => {
        setImpedanceType(event.target.value);
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setLen1("");
        setV1("");
        setAmplitude("");
        setZ3Inf(false);
    }
     function handleSubmit(event) {
        event.preventDefault();
        if(impedanceType!=="Z" & Z4!==""){
            setTwoJValues([+amplitude, Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), [Math.sqrt(+L3/+C3), Math.sqrt(+L4/+C4)], +len1, +v1])
        } else if(impedanceType!=="Z" & Z4==="") {
            setTwoJValues([+amplitude,  Math.sqrt(+L1/+C1), Math.sqrt(+L2/+C2), Math.sqrt(+L3/+C3), +len1, +v1])
        } else if(impedanceType==="Z" & Z4!==""){
            setTwoJValues([+amplitude, +Z1, +Z2, [+Z3, +Z4], +len1, +v1])
        } else {
            setTwoJValues([+amplitude, +Z1, +Z2, +Z3, +len1, +v1])
        }
    }
    // function handleExampleOne(event){
    //     event.preventDefault();
    //     setZ1(400)
    //     setZ2(100)
    //     setZ3(Infinity)
    //     setLen1(300)
    //     setV1(150)
    //     setAmplitude(100)
    //     setZ3Inf(true)
    // }
    // function handleExampleTwo(event){
    //     event.preventDefault();
    //     setZ1(500)
    //     setZ2(100)
    //     setZ3(Infinity)
    //     setZ4(250)
    //     setLen1(500)
    //     setV1(250)
    //     setAmplitude(50)
    //     setZ3Inf(true)
    // }
    
    function handleReset(event){
        event.preventDefault();
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setL1("");
        setL2("");
        setL3("");
        setL4("");
        setC1("");
        setC2("");
        setC3("");
        setC4("");
        setLen1("");
        setV1("");
        setAmplitude("");
        setZ3Inf(false);
    }
    return (
        <Wrapper>
            <FormTitle>2 junctions Data</FormTitle>
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
                        <TextField
                            type={Z3Inf?"text":"number"}
                            variant='outlined'
                            color='secondary'
                            label="Z3 (&#8486;)"
                            onChange={e => Z3Inf?setZ3(Infinity):setZ3(e.target.value)}
                            value={`${Z3}`}
                            fullWidth
                            required
                        />
                        <FormControlLabel control={<Checkbox checked={Z3Inf} onChange={e => {
                            setZ3Inf(!Z3Inf);
                            setZ3(Infinity);
                            return 0
                        }} />} label="Z3 inf" />
                        {
                            lineType==="TJunction"&&<TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Z4 (&#8486;)"
                            onChange={e => setZ4(e.target.value)}
                            value={`${Z4}`}
                            fullWidth
                            required
                        />
                        }
                    </Stack> :
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
                        </Stack>
                        {
                            lineType==="TJunction"&&<Stack spacing={2} direction="column" sx={{marginBottom: 0}}>
                            <TextField
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label="L4 (H)"
                                onChange={e => setL4(e.target.value)}
                                value={L4}
                                fullWidth
                                required
                            />
                            <TextField
                                type="number"
                                variant='outlined'
                                color='secondary'
                                label="C4 (F)"
                                onChange={e => setC4(e.target.value)}
                                value={C4}
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
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="line length (m)"
                        onChange={e => setLen1(e.target.value)}
                        value={len1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />

                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="line velocity (m/&micro;s)"
                        onChange={e => setV1(e.target.value)}
                        value={v1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
                        <Button variant="outlined" color="secondary" type="submit">Draw</Button>
                        {/* {
                            lineType==="series"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleOne}>Example 1</Button> :
                            lineType==="TJunction"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleTwo}>Example 2</Button>:
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
