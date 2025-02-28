import React from 'react';
import {Container, Box, Button, Typography, Paper} from '@mui/material';
import {contactRoutes} from "../configs/routesConfig";
import {socialIconsList} from "../configs/menuConfig";
import SocialIcon from "../components/SocialIcon";


function ContactUsPage() {

    return (<Container maxWidth="lg">
        <Container
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(45deg, #444 30%, #FF8E53 90%)',
                color: '#fff',
                minHeight: '80vh',
                width: '100%',
                marginTop: '2rem',
                marginBottom: '2rem',
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
                    marginRight: {md: '10ch'},
                    marginBottom: {xs: '2rem', md: '0'},
                }}
            >
                <Typography variant="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="h6" sx={{margin: '1rem 0'}}>
                    We invite you to join us on this exciting adventure. We are always looking for talented and driven
                    individuals who are passionate about doing things differently. Together, we are shaping the future,
                    one idea at a time.
                </Typography>
            </Box>
            <Paper
                sx={{
                    background: 'linear-gradient(45deg, #888 30%, #555 90%)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderLeft: 1,
                    borderTop: 1,
                    width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                    height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                   
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1rem 0',
                        cursor: 'pointer'
                    }}
                >
                    {socialIconsList.map((item) => SocialIcon(item))}
                </Box>
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
                        
                    }}
                >
                    Apply
                </Button>
                <Box
                    component = "img"
                    src = "/contant-images/CollegeofEngineeringLogoTransparent.png"
                    alt = "AveE"
                    sx = {{
                        marginTop: 8, 
                        width: "100%", 
                        maxWidth: "80%", 
                        borderRadius: 2, 
                        opacity:1
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
                        opacity:1
                    }}
                />
            </Paper>
        </Container>
    </Container>)
}

export default ContactUsPage;
