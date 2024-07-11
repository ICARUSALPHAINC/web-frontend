// src/Home.js
import React, { useRef } from 'react';
import { Box, Typography, Container, IconButton, Grid } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { keyframes } from '@emotion/react';
import bg from '../../assets/clouds/clouds3.jpg';

// Animation for the arrow button
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Animation for the text
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Home = () => {
  const descriptionRef = useRef(null);

  const scrollToDescription = () => {
    descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Cover Section */}
      <Box
        sx={{
          height: '80ch',
          
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Transparent background
          position: 'relative',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            zIndex: 1,
            
            animation: `${fadeIn} 2s ease-in-out`,
          }}
        >
          Welcome to Icarus Development
        </Typography>
        <IconButton
          color="primary"
          onClick={scrollToDescription}
          sx={{
            zIndex: 1,
            position: 'absolute',
            bottom: '10px',
            animation: `${bounce} 2s infinite`,
            opacity: 0.7,
          }}
        >
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Description and Projects Section */}
      <Container ref={descriptionRef} sx={{ py: 9 }}>
        {/* Company Description with Trapezoid Image */}
        <Grid container spacing={0} sx={{ mb: 5 }}>
          <Grid item xs={12} md={6} sx={{ pr: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Somedescription  Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription Somedescription.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box
              sx={{
                width: '80vh',
                height: '50ch',
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 25% 100%)',
              }}
            ></Box>
          </Grid>
        </Grid>

        {/* Ongoing Projects */}
        <Typography variant="h4" component="h2" gutterBottom>
          Ongoing Projects
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some of our ongoing projects:
        </Typography>
        <ul>
          <li>Project A - Description of project A.</li>
          <li>Project B - Description of project B.</li>
          <li>Project C - Description of project C.</li>
        </ul>
      </Container>
    </div>
  );
};

export default Home;
