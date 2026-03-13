import React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const HeroSection = () => {
    
    const assets = {
        bg: require('../../assets/home-page/hero-section/background.png'),      
        blue: require('../../assets/home-page/hero-section/blue.png'),
        char: require('../../assets/home-page/hero-section/character.png'), 
    };

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 'auto', md: '90vh' },
                minHeight: '600px', 
                display: 'flex',
                alignItems: 'stretch',
                backgroundImage: `url(${assets.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                color: '#fff',
                paddingTop: { xs: '4rem', md: '0' }
            }}
        >
            <Container maxWidth="xl" sx={{ height: '100%' }}>
                <Grid container spacing={0} sx={{ height: '100%' }}>
                    
                    {/* --- LEFT COLUMN: TEXT CONTENT --- */}
                    <Grid item xs={12} md={6} 
                        sx={{ 
                            zIndex: 3,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingLeft: { xs: 2, md: 4 },
                            paddingRight: { xs: 2, md: 4 },
                        }}
                    >
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography 
                                variant="h3" 
                                component="div" 
                                sx={{
                                    color: '#ffffff',
                                    fontWeight: '700', 
                                    textTransform: 'uppercase',
                                    lineHeight: 1,
                                    fontSize: { xs: '2.5rem', md: '3rem', lg: '4rem' } 
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
                                    color: '#ff4081',
                                    fontSize: { xs: '4.5rem', md: '6.5rem', lg: '8.5rem', xl: '9.5rem' }, // Scalable
                                    lineHeight: 1,
                                    marginBottom: '1rem'
                                }}
                            >
                                Playing
                            </Typography>

                            <Divider 
                                sx={{ 
                                    borderRadius: 1,
                                    backgroundColor: '#fff', 
                                    height: '6px', 
                                    width: '100%', 
                                    maxWidth: '600px',
                                    marginBottom: '2rem' 
                                }} 
                            />

                            <Typography variant="h6" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4, fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' }, maxWidth: '650px' }}>
                                Icarus Alpha is a next-gen gaming studio uniting elite creatives 
                                to redefine gaming and interactive storytelling.
                            </Typography>

                            <Typography variant="h6" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4, fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' }, maxWidth: '650px' }}>
                                Our studio is focused entirely on developing original IPs, 
                                built independently without external ownership or influence.
                            </Typography>

                            <Typography variant="h6" sx={{ color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.4, fontSize: { xs: '1rem', md: '1.25rem', lg: '1.5rem' }, maxWidth: '650px' }}>
                                We are beholden to no one – and the industry is about to take notice.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* --- RIGHT COLUMN: CHARACTER COMPOSITION --- */}
                    <Grid item xs={12} md={6} 
                        sx={{ 
                            position: 'relative', 
                            height: '100%', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            paddingBottom: 0
                        }}
                    >
                        {/* The Blue Brush Stroke */}
                        <Box
                            component="img"
                            src={assets.blue}
                            alt="Paint Splash"
                            sx={{
                                position: 'absolute',
                                // Fix: Anchor to BOTTOM so it doesn't grow into the navbar
                                bottom: { xs: '0%', md: '-5%' }, 
                                left: { xs: '-10%', md: '-30%' },
                                width: { xs: '140%', md: '140%' }, // Huge size
                                maxWidth: 'none',
                                zIndex: 1,
                                opacity: 0.9,
                                transform: 'scale(0.9)', 
                                // Prevent it from being too tall on some screens
                                maxHeight: '110%', 
                            }}
                        />

                        {/* The Character */}
                        <Box
                            component="img"
                            src={assets.char}
                            alt="Character"
                            sx={{
                                position: 'relative',
                                display: 'block',
                                width: 'auto',
                                height: { xs: '50vh', md: '80vh', lg: '85vh' }, 
                                maxHeight: '100%',
                                objectFit: 'contain',
                                objectPosition: 'bottom',
                                zIndex: 2,
                                filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))'
                            }}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;