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
            
        </Box>
    )
}

export default AboutUsPage;
