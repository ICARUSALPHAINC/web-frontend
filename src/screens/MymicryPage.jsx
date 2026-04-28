import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';

// --- Import Assets ---
import Background from '../assets/home-page/hero-section/background.png';
import char1 from '../assets/games/mimicry/mym.png';
import Title from '../assets/games/mimicry/title.png';

// --- Animations ---
// Creates a smooth up-and-down floating effect with a dynamic shadow
const floatAnimation = keyframes`
  0% { transform: translateY(0px); filter: drop-shadow(0px 10px 15px rgba(0, 180, 150, 0.2)); }
  50% { transform: translateY(-20px); filter: drop-shadow(0px 25px 25px rgba(0, 180, 150, 0.4)); }
  100% { transform: translateY(0px); filter: drop-shadow(0px 10px 15px rgba(0, 180, 150, 0.2)); }
`;

function MymicryPage() {
    return (
        <Box 
            sx={{ 
                backgroundColor: '#060606', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden', 
                userSelect: 'none',       
                WebkitUserSelect: 'none', 
            }}
        >
            {/* =========================================
                HERO SECTION
               ========================================= */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
                        
                        {/* LEFT COLUMN: Title & CTA */}
                        <Grid 
                            item xs={12} md={6} 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: { xs: 'center', md: 'flex-start' }, 
                                textAlign: { xs: 'center', md: 'left' }, 
                                gap: 4, // Increased from 3 for better breathing room
                                pl: { xs: 0, md: 4, lg: 8 }, // Pulls the content slightly inward from the edge
                                zIndex: 5 
                            }}
                        >
                            <Box 
                                component="img" 
                                src={Title} 
                                alt="Mymicry Title" 
                                sx={{ 
                                    width: '100%',
                                    // Significantly increased size for better visual hierarchy
                                    maxWidth: { xs: '300px', md: '500px', lg: '650px' },
                                    filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.6))',
                                }} 
                            />
                            
                            <Typography 
                                variant="h5" // Bumped up from h6 to balance the larger title
                                sx={{ 
                                    color: '#e0e0e0', // Brightened text slightly
                                    maxWidth: '500px', 
                                    fontWeight: 300, 
                                    lineHeight: 1.6,
                                    letterSpacing: '0.02em'
                                }}
                            >
                                Placeholder Text
                            </Typography>

                            <Button
                                sx={{ 
                                    mt: 1,
                                    backgroundColor: '#075b5a', // Matches the character's thematic color
                                    color: '#fff',
                                    px: 6, // Wider padding
                                    py: 1.8, // Taller padding
                                    fontSize: '1.1rem', // Larger font
                                    fontWeight: 'bold',
                                    borderRadius: '50px', // Smoother, pill-shaped button
                                    textTransform: 'none',
                                    boxShadow: '0px 8px 20px rgba(7, 91, 90, 0.4)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#097a78',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0px 12px 25px rgba(7, 91, 90, 0.6)',
                                    }
                                }}
                            >
                                Placeholder Button
                            </Button>
                        </Grid>

                        {/* RIGHT COLUMN: Character (Mym) */}
                        <Grid item xs={12} md={6} 
                            sx={{ 
                                position: 'relative', 
                                height: { xs: '50vh', md: '80vh' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* Ambient glow behind the character */}
                            <Box 
                                sx={{
                                    position: 'absolute',
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle, rgba(7, 91, 90, 0.3) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%',
                                    zIndex: 1,
                                }}
                            />

                            {/* Character Image with Floating Animation */}
                            <Box 
                                component="img" 
                                src={char1} 
                                alt="Mym Character"
                                sx={{ 
                                    position: 'relative',
                                    maxWidth: '100%',
                                    maxHeight: { xs: '100%', md: '85%' },
                                    objectFit: 'contain',
                                    zIndex: 3, 
                                    animation: `${floatAnimation} 4s ease-in-out infinite`,
                                }} 
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>

        </Box>
    );
}

export default MymicryPage;