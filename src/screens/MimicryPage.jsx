import React from 'react';
import { Box, Container, Grid } from '@mui/material';

// --- Import Assets ---
import background1 from '../assets/games/mimicry/background1.jpg';
import background2 from '../assets/games/mimicry/background2.png';

import char1 from '../assets/games/mimicry/char1.png';
import char2 from '../assets/games/mimicry/char2.png';
import char3 from '../assets/games/mimicry/char3.png';
import char4 from '../assets/games/mimicry/char4.png';
import char5 from '../assets/games/mimicry/char5.png';
import char6 from '../assets/games/mimicry/char6.png';

import flores1 from '../assets/games/mimicry/flores1.png';
import flores2 from '../assets/games/mimicry/flores2.png';
import flores3 from '../assets/games/mimicry/flores3.png';
import flores4 from '../assets/games/mimicry/flores4.png';
import flores5 from '../assets/games/mimicry/flores5.png';

import textAsset from '../assets/games/mimicry/text.png';
import actionButton from '../assets/games/mimicry/button.png';

function MimicryPage() {
    return (
        <Box 
            sx={{ 
                backgroundColor: '#0a0a0a', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden', 
                userSelect: 'none',       
                WebkitUserSelect: 'none', 
            }}
        >
            {/* =========================================
                SECTION 1: TOP (Background 1)
                Characters on the RIGHT (1 on top, 2 on bottom)
               ========================================= */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: 'auto', md: '100vh' },
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: `url(${background1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pt: { xs: '6rem', md: 0 },
                    pb: { xs: '4rem', md: 0 },
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 0 }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }}>
                        
                        {/* LEFT COLUMN: Flores Logo Group, Text, Button */}
                        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', gap: 4, zIndex: 5 }}>
                            
                            {/* Flores Images Row */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                                <Box component="img" src={flores1} alt="F" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto', objectFit: 'contain' }} />
                                <Box component="img" src={flores2} alt="l" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto', objectFit: 'contain' }} />
                                <Box component="img" src={flores3} alt="o" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto', objectFit: 'contain' }} />
                                <Box component="img" src={flores4} alt="r" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto', objectFit: 'contain' }} />
                                <Box component="img" src={flores5} alt="es" sx={{ height: { xs: '40px', md: '60px' }, width: 'auto', objectFit: 'contain' }} />
                            </Box>

                            <Box component="img" src={textAsset} alt="Descriptive Text" sx={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} />
                            <Box 
                                component="img" 
                                src={actionButton} 
                                alt="Action Button" 
                                sx={{ 
                                    maxWidth: '200px', 
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' } 
                                }} 
                            />
                        </Grid>

                        {/* RIGHT COLUMN: Characters 1, 2, 3 (Triangle: 1 Top, 2 Bottom) */}
                        <Grid item xs={12} md={7} 
                            sx={{ 
                                position: 'relative', 
                                height: { xs: '60vh', md: '80vh' },
                                display: 'flex',
                            }}
                        >
                            {/* Top Character */}
                            <Box component="img" src={char1} 
                                sx={{ 
                                    position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)', 
                                    height: '55%', zIndex: 3, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' 
                                }} 
                            />
                            {/* Bottom Left Character */}
                            <Box component="img" src={char2} 
                                sx={{ 
                                    position: 'absolute', bottom: '5%', left: '15%', 
                                    height: '55%', zIndex: 2, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' 
                                }} 
                            />
                            {/* Bottom Right Character */}
                            <Box component="img" src={char3} 
                                sx={{ 
                                    position: 'absolute', bottom: '5%', right: '15%', 
                                    height: '55%', zIndex: 2, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' 
                                }} 
                            />
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* =========================================
                SECTION 2: BOTTOM (Background 2)
                Characters on the LEFT (2 on top, 1 on bottom)
               ========================================= */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: 'auto', md: '100vh' },
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: `url(${background2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pt: { xs: '4rem', md: 0 },
                    pb: { xs: '4rem', md: 0 },
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 0 }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4} alignItems="center" sx={{ minHeight: '80vh' }} flexDirection={{ xs: 'column-reverse', md: 'row' }}>
                        
                        {/* LEFT COLUMN: Characters 4, 5, 6 (Inverted Triangle: 2 Top, 1 Bottom) */}
                        <Grid item xs={12} md={7} 
                            sx={{ 
                                position: 'relative', 
                                height: { xs: '60vh', md: '80vh' },
                                display: 'flex',
                            }}
                        >
                            {/* Top Left Character */}
                            <Box component="img" src={char4} 
                                sx={{ 
                                    position: 'absolute', top: '5%', left: '15%', 
                                    height: '55%', zIndex: 2, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' 
                                }} 
                            />
                            {/* Top Right Character */}
                            <Box component="img" src={char5} 
                                sx={{ 
                                    position: 'absolute', top: '5%', right: '15%', 
                                    height: '55%', zIndex: 2, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))' 
                                }} 
                            />
                            {/* Bottom Character */}
                            <Box component="img" src={char6} 
                                sx={{ 
                                    position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', 
                                    height: '55%', zIndex: 3, filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.5))'
                                }} 
                            />
                        </Grid>

                        {/* RIGHT COLUMN: Filler / Context Text */}
                        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: {xs: 'flex-start', md: 'flex-end'}, gap: 3, zIndex: 5 }}>
                             {/* <Box component="img" src={textAsset} alt="Descriptive Text" sx={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} /> */}
                        </Grid>

                    </Grid>
                </Container>
            </Box>

        </Box>
    );
}

export default MimicryPage;