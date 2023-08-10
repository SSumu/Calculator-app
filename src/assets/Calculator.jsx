import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react'

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonPress = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            const calculatedResult = eval(input);
            setResult(calculatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCalculate();
        }
    };

    return(
        <Grid container spacing={2} p={2} justifyContent={'center'}>
            <Grid item xs={12} sm={6}>
                <TextField variant='outlined' fullWidth value={input} label='Input' onKeyDown={handleKeyDown} />
                <TextField variant='outlined' fullWidth value={result} label='Result' disabled sx={{ marginTop: 1 }} />
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('1')}> 1 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('2')}> 2 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('3')}> 3 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('+')}> + </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('4')}> 4 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('5')}> 5 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('6')}> 6 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('-')}> - </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('7')}> 7 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('8')}> 8 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('9')}> 9 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('*')}> * </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('0')}> 0 </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('.')}> . </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleClear('Clear')}> Clear </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box marginTop={1}>
                            <Button variant='contained' fullWidth onClick={() => handleButtonPress('/')}> / </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box marginTop={1}>
                    <Button variant='contained' color='primary' fullWidth onClick={handleCalculate}> Calculate </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
