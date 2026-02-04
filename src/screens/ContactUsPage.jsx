import React from 'react';
import {Container, Box, Button, Typography, Paper} from '@mui/material';
import {contactRoutes} from "../configs/routesConfig";
import {socialIconsList} from "../configs/menuConfig";
import SocialIcon from "../components/SocialIcon";
import MuiAccordion from '../components/MuiAccordion';


function ContactUsPage() {
    const items = [
        {role: "Developers", desc:"you shall develop stuffs"},
        {role: "Designers", desc:"you shall design stuffs"},
        {role: "Artists", desc:"you shall draw art and stuffs"},
        {role: "Animation/Rigging", desc:"you shall animate and rig models and stuffs"},
        {role: "Audio", desc:"you shall make cool sounds and stuffs"},
        {role: "Media", desc:"you shall create media and video stuffs"},
        {role: "Marketing", desc:"you shall market us on social media stuffs"},
        {role: "Production", desc:"you shall produce stuffs"},
        {role: "Finance", desc:"you shall handle our finances and money stuffs"},
        {role: "Operations", desc:"you shall organize our operations"}
    ];
    return (
        <Container maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                component="img"
                src=""
                alt="IcarusAlphaSplashArt"
                sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                }}
            />
            <Typography variant='h1'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px',
                }}
            >
                Open Positions
            </Typography>
            <MuiAccordion items={items}/>
        <Container // Benefits
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                minHeight: '80vh',
                width: '100%',
                // marginTop: '2rem',
                // marginBottom: '2rem',
                borderRadius: '20px',
            }}
        >
            <Box
                sx={{
                    boxSizing: 'initial',
                    borderRadius: '10px',
                    padding: '2rem',
                    width: {xs: '80%', md: '50ch'},
                    textAlign: 'center',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // marginRight: {md: '10ch'},
                    marginBottom: {xs: '2rem', md: '0'},
                    background: 'linear-gradient(45deg, #444 30%, #FF8E53 90%)',
                }}
            >
                <Typography variant="h1" sx={{margin: '1rem 0'}}>
                    Why Work With Us?
                </Typography>
            </Box>

            <Container // Benefits row 1
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                color: '#fff',
                width: '100%',
                // marginTop: '2rem',
                // marginBottom: '2rem',
                borderRadius: '20px',
            }}
            >
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '2rem',
                
            }}
                >Chill</Box>
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '2rem',
                
            }}
                >Fun</Box>
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '2rem',
                
            }}
                >Vibes</Box>
            </Container>

            <Container // Benefits row 2
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                color: '#fff',
                width: '100%',
                // marginTop: '2rem',
                // marginBottom: '2rem',
                borderRadius: '20px',
            }}
            >
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '0.25rem',
                
            }}
                >I</Box>
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '0.25rem',
                
            }}
                >Love</Box>
                <Box sx={{
                background: '#333333',
                borderRadius: '10px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '0.25rem',
                
            }}
                >Horses</Box>
            </Container>
            
        </Container>

        <Button
            variant="contained"
            href = {contactRoutes.apply}
            rel="noopener noreferrer"
            target="_blank"
            sx={{
                width: '20ch',
                marginTop: '1rem',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                transition: "opacity 0.5s",
                '&:hover': {
                    opacity: 0.5,
                },
                marginBottom: '1rem'
                
            }}
        >
            Apply Now!
        </Button>
        <Paper
            sx={{
                background: 'linear-gradient(45deg, #888 30%, #555 90%)',
                borderRadius: '20px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                marginTop: '2rem',
                marginBottom: '2rem'
                
            }}
        >
            <Box
                component = "img"
                src = "/contant-images/CollegeofEngineeringLogoTransparent.png"
                alt = "AveE"
                sx = {{
                    marginTop: 2, 
                    width: "100%", 
                    maxWidth: "80%", 
                    borderRadius: 2, 
                    opacity:1,
                    transition: 'scale 0.5s',
                    '&:hover': {scale: '1.2'}
                }}
            />
            <Box
                component = "img"
                src = "/contant-images/AveE_Chevron_Horizontal-Color.png"
                alt = "AveE"
                sx = {{
                    marginTop: 2, 
                    width: "100%", 
                    maxWidth: "80%", 
                    borderRadius: 2, 
                    opacity:1,
                    transition: 'scale 0.5s',
                    '&:hover': {scale: '1.2'}
                }}
            />
        </Paper>
        
    </Container>
    )
}

export default ContactUsPage;
