import React from 'react';
import { Box } from '@mui/material';

// --- Import Components ---
import HeroSection from '../components/home/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import GlobalNetwork from '../components/home/GlobalNetwork';
import AboutUs from '../components/home/AboutUs';
import JoinUs from '../components/home/JoinUs';

function HomePage() {
    return (
        <Box 
            sx={{ 
                backgroundColor: '#0a0a0a', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden', // Prevent horizontal scrollbars(Featured Projects)
                userSelect: 'none',       // Prevents the typing cursor/text highlighting
                WebkitUserSelect: 'none', // Safari/Chrome support
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

            {/* =========================================
                PART 4: About Us
               ========================================= */}
            <AboutUs/>

            {/* =========================================
                PART 5: Join Us (CAREERS)
               ========================================= */}
            <JoinUs/>

        </Box>
    );
}

export default HomePage;