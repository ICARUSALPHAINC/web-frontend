// Footer.js
import React from 'react';
import {Box, Link, Typography, useMediaQuery} from '@mui/material';
import {socialIconsList} from "../../configs/menuConfig";
import SocialIcon from "../SocialIcon";
import {contactRoutes, routes} from "../../configs/routesConfig";
import {theme} from "../../themes/primaryTheme";

function Footer() {

    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

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

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant="body2" sx={{marginRight: '2rem'}}>
                        {contactRoutes.email.split(':')[1]}
                    </Typography>
                    {socialIconsList.map((item) => SocialIcon(item))}
                </Box>

            </Box>
        </footer>
    );
}

export default Footer;
