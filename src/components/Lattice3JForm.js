import React, {useState} from 'react';
import { TextField, Button, Stack, Checkbox, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
 
 
const LatticeForm = ({setThreeJValues, numOfJ}) => {
    const [amplitude, setAmplitude] = useState("");
    const [Z1, setZ1] = useState("");
    const [Z2, setZ2] = useState("");
    const [Z3, setZ3] = useState("");
    const [Z4Inf, setZ4Inf] = useState(false);
    const [Z4, setZ4] = useState("");
    const [Z5, setZ5] = useState("");
    const [len1, setLen1] = useState("");
    const [len2, setLen2] = useState("");
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [lineType, setLineType] = useState("series");
    const [impedanceType, setImpedanceType] = useState("Z");

    const handleLineTypeRadio = (event) => {
        setLineType(event.target.value);
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setLen1("")
        setV1("")
        setLen2("")
        setV2("")
        setAmplitude("");
        setZ4Inf(false);
    };
    // const handleImpedanceTypeRadio= (event) => {
    //     setImpedanceType(event.target.value);
    //     setZ1("");
    //     setZ2("");
    //     setZ3("");
    //     setZ4("");
    //     setZ5("");
    //     setLen1("");
    //     setV1("");
    //     setAmplitude("");
    //     setZ4Inf(false);
    // }
     function handleSubmit(event) {
        event.preventDefault();
        Z5!==""?
                setThreeJValues([+amplitude, +Z1, +Z2, +Z3, [+Z4, +Z5], +len1, +len2, +v1, +v2]):
                setThreeJValues([+amplitude, +Z1, +Z2, +Z3, +Z4, +len1, +len2, +v1, +v2])
    }
    function handleExampleThree(event){
        event.preventDefault();
        setZ1(0)
        setZ2(400)
        setZ3(40)
        setZ4(Infinity)
        setLen1(450)
        setLen2(300)
        setV1(300)
        setV2(150)
        setAmplitude(.5)
        setZ4Inf(true)
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
    }
    
    function handleReset(event){
        event.preventDefault();
        setZ1("");
        setZ2("");
        setZ3("");
        setZ4("");
        setZ5("");
        setLen1("");
        setV1("");
        setLen2("");
        setV2("");
        setAmplitude("");
        setZ4Inf(false);
    }
    return (
        <Wrapper>
            <FormTitle>3 junctions Data</FormTitle>
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
                {/* <Stack>
                    <RadioGroup
                    name="controlled-radio-buttons-group-two"
                    value={impedanceType}
                    onChange={handleImpedanceTypeRadio}
                    >
                    <FormControlLabel value="Z" control={<Radio />} label="Z" />
                    <FormControlLabel value="L&C" control={<Radio />} label="L&C" />
                    </RadioGroup>
                </Stack> */}
                { 
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
                            numOfJ==="ThreeJunctions"&&<TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="Z3 (&#8486;)"
                            onChange={e => setZ3(e.target.value)}
                            value={`${Z3}`}
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
                            value={`${Z5}`}
                            fullWidth
                            required
                        />
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
                        label="line 1 length (m)"
                        onChange={e => setLen1(e.target.value)}
                        value={len1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                        />
                        {
                            numOfJ==="ThreeJunctions"&&<TextField
                            type="number"
                            variant='outlined'
                            color='secondary'
                            label="line 2 length (m)"
                            onChange={e => setLen2(e.target.value)}
                            value={len2}
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
                        label="line 1 velocity (m/&micro;s)"
                        onChange={e => setV1(e.target.value)}
                        value={v1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    {
                        numOfJ==="ThreeJunctions"&&<TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="line 2 velocity (m/&micro;s)"
                        onChange={e => setV2(e.target.value)}
                        value={v2}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    }
                </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
                        <Button variant="outlined" color="secondary" type="submit">Draw</Button>
                        {
                            lineType==="series"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleThree}>Example 3</Button> :
                            lineType==="TJunction"&impedanceType==="Z"?
                            <Button variant="outlined" color="secondary" onClick={handleExampleFour}>Example 4</Button>:
                            null
                        }
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
