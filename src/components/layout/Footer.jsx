// Footer.js
import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 0',
        backgroundColor: '#333',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          maxWidth: '100%',
          padding: '0 2rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Icarus Development. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ marginRight: '2rem' }}>
            Email: contact@company.com
          </Typography>
          <Link href="https://www.facebook.com" target="_blank" sx={{ margin: '0 0.5rem', color: '#fff', '&:hover': { color: '#3b5998' } }}>
            <FacebookIcon fontSize="medium" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" sx={{ margin: '0 0.5rem', color: '#fff', '&:hover': { color: '#E4405F' } }}>
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" sx={{ margin: '0 0.5rem', color: '#fff', '&:hover': { color: '#1DA1F2' } }}>
            <TwitterIcon fontSize="medium" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" sx={{ margin: '0 0.5rem', color: '#fff', '&:hover': { color: '#0077b5' } }}>
            <LinkedInIcon fontSize="medium" />
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
