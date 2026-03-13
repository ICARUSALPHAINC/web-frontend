import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';

// --- ASSET IMPORTS ---
const arrowAsset = require('../../assets/home-page/featured-projects/arrow.png');

const projectData = [
    {
        id: 1,
        title: "The Come-Up",
        // The large banner with logos (Active State)
        imgLarge: require('../../assets/home-page/featured-projects/come-up-lg.png'), 
        // The portrait character view (Inactive State)
        imgSmall: require('../../assets/home-page/featured-projects/come-up-sm.png'), 
    },
    {
        id: 2,
        title: "Aescension",
        imgLarge: require('../../assets/home-page/featured-projects/aescension-lg.png'),
        imgSmall: require('../../assets/home-page/featured-projects/aescension-sm.png'),
    },
    {
        id: 3,
        title: "Mimicry",
        imgLarge: require('../../assets/home-page/featured-projects/mimicry-lg.png'),
        imgSmall: require('../../assets/home-page/featured-projects/mimicry-sm.png'),
    },
];

const FeaturedProjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Hooks for responsive adjustments
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Runs once during initial load of page; forces browser to fetch + cache all images immediately.
    // Reduces latency when switching between projects since images are already cached.
    useEffect(() => {
        projectData.forEach((project) => {
            const imgL = new Image();
            imgL.src = project.imgLarge;
            const imgS = new Image();
            imgS.src = project.imgSmall;
        });
    }, []);
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

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    // --- POSITIONAL LOGIC ---
    const getCardStyle = (index) => {
        const total = projectData.length;
        const prevIndex = (activeIndex - 1 + total) % total;
        const nextIndex = (activeIndex + 1) % total;

        let style = {
            left: '50%',
            opacity: 0,
            zIndex: 0,
            scale: 0.5,
            pointerEvents: 'none'
        };

        // 1. ACTIVE CARD (Center)
        if (index === activeIndex) {
            style = {
                left: '50%',
                opacity: 1,
                zIndex: 10,
                scale: 1,
                pointerEvents: 'auto'
            };
        } 
        // 2. PREVIOUS CARD (Far Left)
        else if (index === prevIndex) {
            style = {
                // On mobile, 0% puts the center of the image on the edge
                // On desktop, 15% keeps it visible but separated from the middle
                left: isMobile ? '0%' : '15%', 
                opacity: 0.5, // Lower opacity to push it visually to background
                zIndex: 5,
                scale: 0.7,   // Smaller scale to reduce overlap
                pointerEvents: 'auto'
            };
        } 
        // 3. NEXT CARD (Far Right)
        else if (index === nextIndex) {
            style = {
                // On mobile, 100% puts the center of the image on the right edge
                // On desktop, 85% keeps it visible but separated
                left: isMobile ? '100%' : '85%', 
                opacity: 0.5,
                zIndex: 5,
                scale: 0.7,
                pointerEvents: 'auto'
            };
        }

        return style;
    };

    return (
        <Box sx={{
            backgroundColor: '#0a0a0a',
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
                    color: '#ffffff',
                    marginTop: '2rem',
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
                position: 'relative',
                width: '100%',
                height: { xs: '40vh', md: '60vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
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
                        const { left, opacity, zIndex, scale, pointerEvents } = getCardStyle(index);
                        const isActive = index === activeIndex;

                        return (
                            <Box
                                key={project.id}
                                onClick={() => handleCardClick(index)}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    // Centers the element on its 'left' coordinate
                                    transform: `translate(-50%, -50%) scale(${scale})`,
                                    left: left,
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    pointerEvents: pointerEvents,
                                    
                                    // Smooth Transition
                                    transition: 'left 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s ease',
                                    
                                    height: '100%',
                                    width: 'auto',
                                    cursor: 'pointer',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    
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
                                        display: 'block',
                                        height: '100%',
                                        width: 'auto',
                                        maxWidth: 'none',
                                        objectFit: 'contain',
                                        transition: 'filter 0.3s ease',
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