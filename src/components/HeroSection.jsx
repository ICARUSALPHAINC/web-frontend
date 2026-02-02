import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const HeroSection = () => {
    
    const assets = {
        bg: require('../assets/hero-section/background.png'),      
        blue: require('../assets/hero-section/blue.png'),
        char: require('../assets/hero-section/character.png'), 
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: '90vh', // Change to personal preference
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${assets.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                color: '#fff',
                paddingTop: { xs: '4rem', md: '0' } // Add padding on mobile if needed
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    
                    {/* --- LEFT COLUMN: TEXT CONTENT --- */}
                    <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>
                        <Box sx={{ textAlign: 'left', maxWidth: '650px' }}>
                            <Typography 
                                variant="h3" 
                                component="div" 
                                sx={{
                                    color: '#ffffff',
                                    fontWeight: '700', 
                                    textTransform: 'uppercase',
                                    lineHeight: 1,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' } 
                                }}
                            >
                                We Ain't
                            </Typography>
                            
                            <Typography 
                                variant="h1" 
                                component="div" 
                                sx={{ 
                                    fontWeight: '900', 
                                    textTransform: 'uppercase', 
                                    color: '#ff4081', // The hot pink color
                                    fontSize: { xs: '4rem', md: '7rem' }, // Responsive sizing
                                    lineHeight: 1,
                                    marginBottom: '1rem'
                                }}
                            >
                                Playing
                            </Typography>

                            <Divider 
                                sx={{ 
                                    backgroundColor: '#fff', 
                                    height: '3px', 
                                    width: '40vw', 
                                    marginBottom: '2rem' 
                                }} 
                            />

                            <Typography variant="h6" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                                Icarus Alpha is a next-gen gaming studio uniting elite creatives 
                                to redefine gaming and interactive storytelling.
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                                Our studio is focused entirely on developing original IPs, 
                                built independently without external ownership or influence.
                            </Typography>

                            <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4 }}>
                                We are beholden to no one – and the industry is about to take notice.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* --- RIGHT COLUMN: CHARACTER COMPOSITION --- */}
                    <Grid item xs={12} md={6} 
                        sx={{ 
                            position: 'relative', 
                            height: { xs: '50vh', md: '80vh' }, // Adjust height for mobile/desktop
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* The Blue Brush Stroke (Background Layer) */}
                        <Box
                            component="img"
                            src={assets.blue}
                            alt="Paint Splash"
                            sx={{
                                position: 'absolute',
                                width: { xs: '90%', md: '80%' },
                                maxWidth: '700px',
                                zIndex: 1,
                                transform: 'rotate(-15deg) scale(1.2)', // Rotate to match reference
                                opacity: 0.9,
                                // mixBlendMode: 'screen' // Optional: toggle this if using the jpg on dark bg
                            }}
                        />

                        {/* The Character (Foreground Layer) */}
                        <Box
                            component="img"
                            src={assets.char}
                            alt="Character"
                            sx={{
                                position: 'relative', // Relative keeps it in the flow but allows z-index
                                height: { xs: '100%', md: '100%' }, // Tall styling
                                maxHeight: '800px',
                                objectFit: 'contain',
                                zIndex: 2,
                                filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' // Adds depth
                            }}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;