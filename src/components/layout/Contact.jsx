import React from 'react';
import { Container, Box, Button, Typography, Paper, Link,  } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #444 30%, #FF8E53 90%)',
        color: '#fff',
        minHeight: '80vh',
        padding: '0 !important',
        height: '50ch',
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
          width: '50ch',
          textAlign: 'center',
          height: '50ch',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: '10ch'
        }}
      >
        <Typography variant="h1" gutterBottom>
          Talk to a Human
        </Typography>
        <Typography sx={{ margin: '1rem 0' }}>
          Ask how can we help you
        </Typography>
      </Box>
      <Paper
        sx={{
          background: 'linear-gradient(45deg, #333 30%, #555 90%)',
          borderRadius: '20px',
          padding: '2rem',
          width: '50ch',
          textAlign: 'center',
          height: '50ch',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centering the content horizontally
          borderLeft: 1,
          borderTop: 1
        }}
      >
        <Typography variant="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography sx={{ margin: '1rem 0' }}>
          Based in Davis, California
        </Typography>
        <Typography sx={{ margin: '1rem 0' }}>
          Email: Something@something
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1rem 0'
          }}
        >
          <Link href="https://www.facebook.com" target="_blank" sx={{ margin: '0 1rem', fontSize: 40, color: '#fff', transition: 'scale 0.5s', '&:hover': { scale: '1.2' } }}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" sx={{ margin: '0 1rem', fontSize: 40, color: '#fff', transition: 'scale 0.5s','&:hover': { scale: '1.2' } }}>
            <InstagramIcon />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" sx={{ margin: '0 1rem', fontSize: 40, color: '#fff', transition: 'scale 0.5s', '&:hover': { scale: '1.2' } }}>
            <TwitterIcon />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" sx={{ margin: '0 1rem', fontSize: 40, color: '#fff', transition: 'scale 0.5s', '&:hover': { scale: '1.2' } }}>
            <LinkedInIcon fontSize="medium" />
          </Link>
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
          href="mailto:something@something.com"
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
  );
};

export default ContactPage;
