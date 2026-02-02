import React, { useState } from 'react';
import { Box, Typography, IconButton} from '@mui/material';

// --- ASSET IMPORTS ---
const arrowAsset = require('../assets/featured-projects/arrow.png');

const projectData = [
    {
        id: 1,
        title: "The Come-Up",
        // The large banner with logos (Active State)
        imgLarge: require('../assets/featured-projects/come-up-lg.png'), 
        // The portrait character view (Inactive State)
        imgSmall: require('../assets/featured-projects/come-up-sm.png'), 
    },
    {
        id: 2,
        title: "Aescension",
        // Large banner with logos
        imgLarge: require('../assets/featured-projects/aescension-lg.png'),
        // Portrait group view
        imgSmall: require('../assets/featured-projects/aescension-sm.png'),
    },
    {
        id: 3,
        title: "Mimicry",
        // Large banner with logos
        imgLarge: require('../assets/featured-projects/mimicry-lg.png'),
        // Portrait creature view
        imgSmall: require('../assets/featured-projects/mimicry-sm.png'),
    },
];

const FeaturedProjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // --- CAROUSEL LOGIC ---
    // Cycle handler for arrows
    const handleNext = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
    };

    // Handler for clicking directly on a project card
    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <Box sx={{ 
            backgroundColor: '#0a0a0a', 
            paddingTop: '3rem', 
            paddingBottom: '5rem',
            width: '100%',
            overflowX: 'hidden', 
            display: 'flex',
            flexDirection: 'column',
            position: 'relative' 
        }}>
            
            <Typography 
                variant="h3" 
                sx={{ 
                    fontWeight: '900', 
                    textTransform: 'uppercase', 
                    color: '#ff4081', 
                    marginBottom: '2rem',
                    paddingLeft: { xs: '2rem', xl: 'calc((100vw - 1200px) / 2)' },
                    fontSize: { xs: '2rem', md: '3rem' },
                    zIndex: 5
                }}
            >
                Featured Projects
            </Typography>

            {/* --- CAROUSEL TRACK --- */}
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                position: 'relative',
                width: '100%',
                // This controls the vertical size of the whole strip. 
                // All images will match this height exactly.
                height: { xs: '40vh', md: '60vh' }, 
            }}>
                
                {/* --- FLOATING LEFT ARROW --- */}
                <IconButton 
                    onClick={handlePrev}
                    sx={{ 
                        position: 'absolute',
                        left: { xs: '10px', md: '5%' }, 
                        zIndex: 20, 
                        padding: 0,
                        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.8))', // Added shadow so it pops over images
                        '&:hover': { opacity: 0.8, transform: 'scale(1.1)' },
                        transition: 'transform 0.2s'
                    }}
                >
                     <Box component="img" src={arrowAsset} alt="Previous" sx={{ width: { xs: '30px', md: '50px' } }} />
                </IconButton>

                {/* --- IMAGE CONTAINER --- */}
                <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 2, md: 4 }, // Increased gap slightly for visual breathing room
                    height: '100%',
                }}>
                    {projectData.map((project, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <Box 
                                key={project.id}
                                onClick={() => handleCardClick(index)}
                                sx={{
                                    height: '100%', // Match the parent height (60vh)
                                    flexShrink: 0,  // NEVER squeeze/compress the image
                                    width: 'auto',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden', // Ensures rounded corners work
                                    
                                    // Visual States
                                    opacity: isActive ? 1 : 0.5,
                                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'transform 0.4s ease, opacity 0.4s ease', // Smooth scale/fade, but strict width
                                    
                                    '&:hover': {
                                        opacity: isActive ? 1 : 0.8,
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={isActive ? project.imgLarge : project.imgSmall}
                                    alt={project.title}
                                    sx={{
                                        display: 'block', // Removes annoying bottom whitespace in standard img tags
                                        height: '100%',   // Force height to fill the 60vh container
                                        width: 'auto',    // Allow width to adjust naturally based on aspect ratio
                                        maxWidth: 'none', // Prevent any max-width constraints
                                        
                                        // This ensures NO stretching happens. 
                                        // The image renders at its natural pixel ratio for this height.
                                        objectFit: 'contain', 
                                    }}
                                />
                            </Box>
                        );
                    })}
                </Box>
                
                {/* --- FLOATING RIGHT ARROW --- */}
                <IconButton 
                    onClick={handleNext}
                    sx={{ 
                        position: 'absolute',
                        right: { xs: '10px', md: '5%' }, 
                        zIndex: 20,
                        transform: 'rotate(180deg)', 
                        padding: 0,
                        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.8))',
                        '&:hover': { opacity: 0.8, transform: 'rotate(180deg) scale(1.1)' },
                        transition: 'transform 0.2s'
                    }}
                >
                     <Box component="img" src={arrowAsset} alt="Next" sx={{ width: { xs: '30px', md: '50px' } }} />
                </IconButton>

            </Box>
        </Box>
    );
};

export default FeaturedProjects;