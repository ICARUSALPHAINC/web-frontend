import React from 'react';
import {Container, Typography, Box} from '@mui/material';

function AboutUsPage() {

    return (<Container maxWidth="lg">
        <Container 
            sx = {{
                display: 'flex',
                flexDirection: {xs: 'row', md: 'column'},
                alighContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(45deg, #444 30%, #FF8E53 90%)',
                color: '#fff',
                minHeight: '80vh',
                width: '100%',
                marginTop: '2rem',
                marginBottom: '2rem',
                borderRadius: '20px',
            }}
        >
        <Box
            sx={{
                boxSizing: 'initial',
                borderRadius: '10px',
                padding: '2rem',
                width: {xs: '80%', md: '50ch'},
                textAlign: 'center',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginBottom: {xs: '2rem', md: '0'},
            }}
        >
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 4 }}>
                About Icarus Development
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 480, mb: 6 }}
            >
                (Text about the Company as a whole)
                Mission statement? Company visions? Company story?
            </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <img
            src="../about-images/6581038.png"
            alt="Maker Illustration"
            style={{
              maxWidth: 300,
              width: "100%",
            }}
          />
        </Box>
    </Container>
    </Container>)
}

export default AboutUsPage;
