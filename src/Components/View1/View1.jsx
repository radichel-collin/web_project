import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import './View1.css';

function View1() {
    return (
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="instructions-text" />
            <FormHelperText id="instructions-text">We'll never share your email.</FormHelperText>
        </FormControl>
    )
}

export default View1;