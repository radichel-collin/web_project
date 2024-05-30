import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import './Forms.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Forms() {
    return (
        <>
        <Header />
        <FormControl
            sx={{
                position: 'absolute',
                marginLeft: '300px',
                marginTop: '300px'
            }}
        >
            <InputLabel htmlFor="email-label">Email address</InputLabel>
            <Input id="email-label" aria-describedby="instructions-text" />
            <FormHelperText id="instructions-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <Footer />
        </>
    )
}

export default Forms;