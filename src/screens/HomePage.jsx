import React from 'react';
import { Box } from '@mui/material';

// --- Part 1 Import ---
import HeroSection from '../components/HeroSection';

// --- Part 2 Import (Future) ---
// import FeaturedProjects from '../components/FeaturedProjects';

// --- Part 3 Import (Future) ---
// import GlobalNetwork from '../components/GlobalNetwork';

function HomePage() {
    return (
        <Box 
            sx={{ 
                // Ensures the entire page background is unified dark color 
                // matching your assets to prevent white gaps between sections
                backgroundColor: '#0a0a0a', 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden', // Prevents horizontal scroll from absolute positioned elements
            }}
        >
            {/* =========================================
                PART 1: HERO SECTION
                The top-level visual hook ("We Ain't Playing")
               ========================================= */}
            <HeroSection />

            {/* =========================================
                PART 2: FEATURED PROJECTS
                Carousel of current games/IPs
               ========================================= */}
            {/* <FeaturedProjects /> */}
            
            {/* Temporary spacer to show where Part 2 will go if you scroll down */}
            {/* <Box sx={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>[Part 2 Area]</Box> */}


            {/* =========================================
                PART 3: GLOBAL NETWORK
                Map and statistics section
               ========================================= */}
            {/* <GlobalNetwork /> */}

        </Box>
    );
}

export default HomePage;