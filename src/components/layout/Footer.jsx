// Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { bottomMenuItems } from "../../configs/menuConfig";

const Footer = () => {
  const theme = useTheme(); // Access the theme

  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 0',
        backgroundColor: '#333',
        color: '#fff',
        marginTop: 'auto',
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
          {bottomMenuItems.map((item, index) => (
            <IconButton
              key={index}
              href={item.route}
              color="inherit"
              sx={{
                marginLeft: '0.5rem',
                transition: 'color 1s',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
