// Footer.js
import React, { useState } from 'react';
import {Box, Link, Typography, useMediaQuery, Snackbar} from '@mui/material';
import {socialIconsList} from "../../configs/menuConfig";
import SocialIcon from "../SocialIcon";
import {contactRoutes, routes} from "../../configs/routesConfig";
import {theme} from "../../themes/primaryTheme";

function Footer() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopyEmail = () => {
        const email = contactRoutes.email.split(':')[1];
        navigator.clipboard.writeText(email).then(() => {
          setOpenSnackbar(true);
        });
      };
    
    const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    };

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
                    flexDirection: mobileView? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: mobileView ? 'flex-start' : 'space-evenly',
                    width: '100vw',
                    maxWidth: '100vw',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Icarus Development. All rights reserved.
                </Typography>

                <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <Typography variant="body2" sx={{marginRight: '2rem'}} onClick={handleCopyEmail}>
                        {contactRoutes.email.split(':')[1]}
                    </Typography>
                    {socialIconsList.map((item) => SocialIcon(item))}
                </Box>

            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000} // Snackbar will disappear after 3 seconds
                onClose={handleCloseSnackbar}
                message="Email address copied to clipboard!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                     // Adjust as needed to position above the email address
                    '& .MuiSnackbarContent-root': {
                      backgroundColor: theme.palette.primary.main,
                      opacity: '0.85 !important',
                      color: theme.palette.common.white,
                      textAlign: 'center',
                      justifyContent: 'center', 
                      width: '100px',
                      fontSize: '0.8rem', // Smaller font size
                      borderRadius: '4px',
                    },
                }}
            />
        </footer>
    );
}

export default Footer;
