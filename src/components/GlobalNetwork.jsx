import React from 'react';
import { Box } from '@mui/material';

// Ensure this path matches where you put the map image
const mapAsset = require('../assets/global-network.png');

const GlobalNetwork = () => {
    return (
        <Box sx={{ 
            width: '100%', 
            backgroundColor: '#0a0a0a', // Matches main theme background
            // Removes potential tiny gaps that can appear under inline images
            lineHeight: 0, 
            // Optional padding if you want space above/below the image
            paddingY: { xs: 4, md: 8 } 
        }}>
            <Box
                component="img"
                src={mapAsset}
                alt="Global Network: 200+ Team Members, 20+ Countries"
                sx={{
                    width: '100%',    // Force full width
                    height: 'auto',   // Scale height naturally to prevent distortion
                    display: 'block', // Ensures it behaves like a block element
                }}
            />
        </Box>
    );
};

export default GlobalNetwork;