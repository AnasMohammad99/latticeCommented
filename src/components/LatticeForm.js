import React, {useState} from 'react';
import { TextField, Button, Stack, Checkbox, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
 
 
const LatticeForm = ({setValues}) => {
    const [amplitude, setAmplitude] = useState("");
    const [Z1, setZ1] = useState("");
    const [Z2, setZ2] = useState("");
    const [Z3, setZ3] = useState("");
    const [Z3Inf, setZ3Inf] = useState(false);
    const [Z4, setZ4] = useState("");
    const [l1, setL1] = useState("");
    const [v1, setV1] = useState("");
    const [lineType, setLineType] = useState("series");

    const handleRadio = (event) => {
        setLineType(event.target.value);
        setZ1("")
        setZ2("")
        setZ3("")
        setZ4("")
        setL1("")
        setV1("")
        setAmplitude("")
        setZ3Inf(false)
    };
    function handleSubmit(event) {
        event.preventDefault();
        Z4!==""?
                setValues([+amplitude, +Z1, +Z2, [+Z3, +Z4], +l1, +v1]):
                setValues([+amplitude, +Z1, +Z2, +Z3, +l1, +v1])
    }
    function handleExample(event){
        event.preventDefault();
        setZ1(500)
        setZ2(100)
        setZ3(250)
        setL1(500)
        setV1(250)
        setAmplitude(50)
        setZ3Inf(false)
    }
    function handleReset(event){
        event.preventDefault();
        setZ1("")
        setZ2("")
        setZ3("")
        setZ4("")
        setL1("")
        setV1("")
        setAmplitude("")
        setZ3Inf(false)
    }
    return (
        <React.Fragment>
            <h2>Lattice Data</h2>
            <FormWrapper onSubmit={handleSubmit}>
                <Stack>
                    <RadioGroup
                    name="controlled-radio-buttons-group"
                    value={lineType}
                    onChange={handleRadio}
                    >
                    <FormControlLabel value="series" control={<Radio />} label="series" />
                    <FormControlLabel value="parallel" control={<Radio />} label="parallel" />
                    </RadioGroup>
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Z1"
                        onChange={e => setZ1(e.target.value)}
                        value={Z1}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Z2"
                        onChange={e => setZ2(e.target.value)}
                        value={Z2}
                        fullWidth
                        required
                    />
                    <TextField
                        type={Z3Inf?"text":"number"}
                        variant='outlined'
                        color='secondary'
                        label="Z3"
                        onChange={e => Z3Inf?setZ3(Infinity):setZ3(e.target.value)}
                        value={`${Z3}`}
                        fullWidth
                        required
                    />
                    <Checkbox checked={Z3Inf} onChange={e => setZ3Inf(!Z3Inf)} />
                    {
                        lineType==="parallel"&&<TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Z4"
                        onChange={e => setZ4(e.target.value)}
                        value={`${Z4}`}
                        fullWidth
                        required
                    />
                    }
                </Stack>
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Amplitude Volt"
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
                        label="first line lenght"
                        onChange={e => setL1(e.target.value)}
                        value={l1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />

                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="first line velocity"
                        onChange={e => setV1(e.target.value)}
                        value={v1}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    <Stack spacing={2} direction="row" sx={{marginBottom: 2}} justifyContent={"space-between"}>
                        <Button variant="outlined" color="secondary" type="submit">Draw</Button>
                        {
                            lineType!=="parallel"&&<Button variant="outlined" color="secondary" onClick={handleExample}>Example</Button>
                        }
                        <Button variant="outlined" color="secondary" onClick={handleReset}>Reset</Button>
                    </Stack>
            </FormWrapper>     
        </React.Fragment>
    )
}
const FormWrapper = styled.form`
`
 
export default LatticeForm;
