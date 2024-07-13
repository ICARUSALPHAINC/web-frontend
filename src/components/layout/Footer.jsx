// Footer.js
import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import {socialIconsList} from "../../configs/menuConfig";
import SocialIcon from "../SocialIcon";
import {contactRoutes, routes} from "../../configs/routesConfig";

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
            {contactRoutes.email.split(':')[1]}
          </Typography>
            {socialIconsList.map((item) => SocialIcon(item))}
        </Box>

      </Box>
    </footer>
  );
};

export default Footer;
