import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, IconButton, Grid, AppBar, Toolbar, useTheme } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { keyframes } from '@emotion/react';
import bg from '../assets/clouds/clouds3.jpg';
import ProjectsPage from "./ProjectsPage";

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
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Home = () => {
    const descriptionRef = useRef(null);
    const theme = useTheme(); // Get the MUI theme

    const scrollToDescription = () => {
        descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const slogans = [
        "Shaping Ideas into Reality",
        "Empowering Innovation, Together",
        "Innovating the Future",
        "Transforming Concepts into Success",
    ];

    const [sloganIndex, setSloganIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        }, 4000); // Change slogan every 4 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (

        <container>
            {/* Cover Section */}
            <Box
                sx={{
                    height: `92vh`, // Adjust height based on AppBar
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
                        animation: `${fadeInOut} 4s`,
                    }}
                >
                    Welcome to Icarus Development
                </Typography>

                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    key={sloganIndex} // Use key to trigger re-render
                    sx={{
                        zIndex: 1,
                        color: 'red',
                        animation: `${fadeInOut} 4s`,
                    }}
                >
                    {slogans[sloganIndex]}
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

                <Typography variant="h2" component="h1" gutterBottom sx={{
                    textAlign: 'center',
                }}>
                    About Us
                </Typography>

                <Grid container spacing={0} sx={{ mb: 5, display: 'flex', alignItems: 'stretch' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="body1" paragraph>
                            Welcome to Icarus Development, the nexus of cutting-edge innovation and collaboration. We are dedicated to projects that push the limits of technology.
                            By refusing to fly low to the ground, we break free from the corporate status quo. This fearless drive to innovate and succeed empowers us to push boundaries and reach new heights.
                            <br />
                            <br />
                            At Icarus Development, we believe in the power of collective creativity. Each team member brings unique skills and perspectives, allowing us to tackle complex challenges and develop forward-thinking solutions. Our projects span various industries, all aiming to make a meaningful impact.
                            We invite you to join us on this exciting adventure. Together, we are shaping the future, one idea at a time.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 25% 100%)',
                            }}
                        ></Box>
                    </Grid>
                </Grid>

                {/* On going projects */}
                <Box>
                    <ProjectsPage/>
                </Box>


            </Container>
        </container>
    );
};

export default Home;