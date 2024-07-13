import React from 'react';
import {Container, Box, Button, Typography, Paper, Link} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {contactRoutes} from "../configs/routesConfig";

const socialIconsList = [
    {icon: <FacebookIcon/>, link: contactRoutes.facebook},
    {icon: <TwitterIcon/>, link: contactRoutes.twitter},
    {icon: <InstagramIcon/>, link: contactRoutes.instagram},
    {icon: <LinkedInIcon/>, link: contactRoutes.linkedIn},
];

// Item has item.link, item.icon
function socialIcon(item) {
    return (
        <Link href={item.link} target="_blank" sx={{
            margin: '0 0.5rem',
            fontSize: 40,
            color: '#fff',
            transition: 'scale 0.5s',
            '&:hover': {scale: '1.2'}
        }}>
            {item.icon}
        </Link>);
}

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
                padding: '0 !important',
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
                    background: 'linear-gradient(45deg, #333 30%, #555 90%)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderLeft: 1,
                    borderTop: 1,
                    width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                    minHeight: '50ch', // Adjusted minimum height for content
                }}
            >
                <Typography variant="h5" sx={{margin: '1rem 0'}}>
                    Based in Davis, California
                    <br/>
                    <br/>
                    Email: {contactRoutes.email.split(':')[1]}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '1rem 0'
                    }}
                >
                    {socialIconsList.map((item) => socialIcon(item))}
                </Box>
                <Button
                    variant="contained"
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
                <Button
                    variant="contained"
                    href={contactRoutes.email}
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
                    Email Us
                </Button>
            </Paper>
        </Container>
    </Container>)
}

export default ContactUsPage;
