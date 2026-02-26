import React from 'react';
import {Container, Box, Button, Typography, Paper} from '@mui/material';
function AboutUsPage() {

    const divStyle = {
        margin: '0 auto', 
        padding: '0 16px', 
        backgroundImage: 'url(/about-images/about-icons-background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundImage: 'url(/about-images/about-icons-background.webp)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(/about-images/about-us-block.webp)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    height: '70%',
                    width: '70%',
                    // border: '2px solid red'
                    // boxSizing: 'initial',
                    // borderRadius: '10px',
                    // padding: '2rem',
                    // width: {xs: '80%', md: '50ch'},
                    // textAlign: 'center',
                    // height: 'auto',
                    // display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // marginRight: {md: '10ch'},
                    // marginBottom: {xs: '2rem', md: '0'},
                }}
            >
                
            </Box>
        </Box>
    )
}

export default AboutUsPage;
