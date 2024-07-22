// Footer.js
import React, { useState } from 'react';
import {Box, Typography, useMediaQuery, Snackbar, Button} from '@mui/material';
import {socialIconsList} from "../../configs/menuConfig";
import {contactRoutes} from "../../configs/routesConfig";
import {theme} from "../../themes/primaryTheme";


function FooterItems(item, index) {
    return (
        <Button
            key={index}
            component={item.route ? 'a' : 'button'} // Not using links and using 'a' instead so component can open in a new tab instead of current tab
            href={item.route ? item.route : undefined}
            target={item.route ? "_blank" : undefined} // Item opens in new tab instead of current tab
            rel={item.route ? "noopener noreferrer" : undefined} // Item opens in new tab instead of current tab
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined}
            color="inherit"
            sx={{
                textDecoration: 'none', // Remove underline
                color: 'inherit', // Inherit color from parent
            }}
        >
            {item.icon}
        </Button>);
}

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
                    {socialIconsList.slice(0, 4).map((item, index) => FooterItems(item, index))}
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
