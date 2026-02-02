import React from 'react';
import { Box } from '@mui/material';

// --- Import Components ---
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import GlobalNetwork from '../components/GlobalNetwork'; // <--- Final Import

function HomePage() {
    return (
        <Box 
            sx={{ 
                backgroundColor: '#0a0a0a', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden', // Prevent horizontal scrollbars(Featured Projects)
            }}
        >
            {/* =========================================
                PART 1: HERO SECTION
               ========================================= */}
            <HeroSection />

            {/* =========================================
                PART 2: FEATURED PROJECTS (CAROUSEL)
               ========================================= */}
            <FeaturedProjects />

            {/* =========================================
                PART 3: GLOBAL NETWORK
               ========================================= */}
            <GlobalNetwork />

        </Box>
    );
}

export default HomePage;