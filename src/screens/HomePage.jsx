import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Container, IconButton, Grid, Divider, Paper, Slide } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { keyframes } from '@emotion/react';


import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import { Typewriter } from 'react-simple-typewriter';
import AutoCarousel from '../components/AutoCarousel';

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

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const CustomDivider = () => (
    <Divider
        color='#4b4b4b'
        sx={{
            marginTop: '5rem',
            marginBottom: '5rem',
        }}
    />
);

// Import and sort images from the directory based on numbers in filenames
const importAndSortImages = (r) =>
    r
        .keys()
        .map(r)
        .sort((a, b) => {
            // Extract numbers from filenames
            // d+ means find the first digit in the string and the one next to it
            const numA = parseInt(a.match(/\d+/), 10);
            const numB = parseInt(b.match(/\d+/), 10);
            return numA - numB;
        });

const bgImages = importAndSortImages(require.context('../assets/clouds-compressed', false, /\.(webp)$/));

function HomePage() {
    const descriptionRef = useRef(null);
    const [bgImage, setBgImage] = useState(bgImages[0]); // Initial background image
   

    const scrollToDescription = () => {
        descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const slogans = [
        'Shaping Ideas into Reality',
        'Empowering Innovation, Together',
    ];

    const [sloganIndex, setSloganIndex] = useState(0);
    const [finalSlogan, setFinalSlogan] = useState(false);

    const sloganChangeTime = 4; // Time between slogan changes, in seconds

    // Slogan change effect, keep the slogan after the second one
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSloganIndex((prevIndex) => {
                const newIndex = prevIndex + 1;
                if (newIndex === slogans.length - 1) {
                    setFinalSlogan(true);
                    clearInterval(intervalId);
                }
                return newIndex;
            });
        }, sloganChangeTime * 1000);

        return () => clearInterval(intervalId);
    }, [slogans.length]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const sectionHeight = totalHeight / bgImages.length; // Divide the total height into sections

            // Determine which background image to show based on scroll position
            const index = Math.min(Math.floor(scrollPosition / sectionHeight), bgImages.length - 1);
            // scrollPosition / sectionHeight calculates which section (from 0 to 6) the current scroll position falls into
            // Math.floor() rounds down to ensure the index corresponds to one of the 7 sections
            // Math.min ensures the index does not exceed the last image in the array (prevents out-of-bounds errors)

            setBgImage(bgImages[index]);    
        };


        // Cleans up by removing the scroll event listener when the component is unmounted or dependencies change
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [bgImage]);

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* Background Image Layer */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'scroll',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    backgroundRepeat: 'no-repeat', 
                    zIndex: -2,
                }}
            ></Box>

            {/* Cover Section */}
            <Box
                sx={{
                    height: '92vh', // Adjust height based on AppBar
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                }}
            >
                <Typography
                    variant="h1"
                    gutterBottom
                    sx={{
                        zIndex: 1,
                        animation: `${fadeIn} 1s`,
                    }}
                >
                    Welcome to Icarus Development
                </Typography>

                <Typography
                    variant="h5"
                    gutterBottom
                    key={sloganIndex} // Use key to trigger re-render
                    sx={{
                        zIndex: 1,
                        animation: finalSlogan ? `${fadeIn} 4s` : `${fadeInOut} 4s`,
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
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: `${bounce} 2s infinite`,
                        opacity: 0.7,
                    }}
                >
                    <KeyboardDoubleArrowDownIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Description and Projects Section */}
            <Container ref={descriptionRef} sx={{ py: 9 }}>

                {/* remove next line when redo the project section  */}
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Current Projects
                    </Typography>
                    <Typography variant="h6" component="h2" color="textSecondary" sx={{mb: '1rem'}}>
                        {/*Invisible character placed before typewriter to preserve layout on typewriter delete animation. */}
                        ‎ <Typewriter
                        words={['Discover what our teams are building!', 'Check out our projects in development!']}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </Typography>
                    <Typography variant="body1">
                        Our projects span various industries, from AI and gaming to social media and productivity tools. At Icarus Development, we tackle complex challenges and develop forward-thinking solutions that make a meaningful impact. We are committed to pushing technological boundaries and creating groundbreaking advancements.
                    </Typography>
                    <AutoCarousel></AutoCarousel>
                </Container>

                <CustomDivider />
                
                {/* remove next line when redo the team section  */}
                <TeamPage />

                <CustomDivider />
                
                
                <Container
                ref={descriptionRef}
                sx={{
                    py: 9,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}
                >
                <Paper
                elevation={3} // Adds a shadow effect for a raised look
                sx={{
                    padding: '2rem',
                    
                    background: 'linear-gradient(45deg, #333 30%, #555 60%)', 
                    backdropFilter: 'blur(10px)', // Optional: Adds a blur effect for better contrast
                    borderRadius: '10px', // Rounded corners for the paper
                    display: 'flex', // Enables flexbox
                    flexDirection: 'column', // Align items in a column
                    justifyContent: 'center', // Center items vertically
                    alignItems: 'center', // Center items horizontally
                    textAlign: 'center', // Center the text within the paper
                    width: '100%', // Full width to ensure centering
                    maxWidth: '800px', // Limit maximum width for better readability
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                >
                    About Us
                </Typography>

                <Grid container spacing={0} sx={{ mb: '2rem', display: 'flex',  alignItems: 'center' }}>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                        Welcome to Icarus Development, the nexus of cutting-edge innovation and collaboration. 
                        We are dedicated to projects that push the limits of technology. 
                        By refusing to fly low to the ground, we break free from the typical corporate mindset. 
                        This fearless drive to innovate and succeed empowers us to push boundaries and reach new heights. 
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            </Container>
            </Container>
        </Box>
    );
}

export default HomePage;
