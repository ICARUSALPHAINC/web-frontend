import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, Snackbar, Button } from '@mui/material';
import { socialIconsList } from "../../configs/menuConfig";
import { contactRoutes } from "../../configs/routesConfig";
import { theme } from "../../themes/primaryTheme";

function FooterItems(item, index) {
    return (
        <Button
            key={index}
            component={item.route ? 'a' : 'button'}
            href={item.route ? item.route : undefined}
            target={item.route ? "_blank" : undefined}
            rel={item.route ? "noopener noreferrer" : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined}
            color="inherit"
            sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '1.5vw',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '3vw',
                },
                '& svg': { // Targeting the icon size within the button
                    fontSize: '1.5vw',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '3vw',
                    },
                }
            }}
        >
            {item.icon}
        </Button>
    );
}

function Footer() {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const handleCopyEmail = () => {
        const email = contactRoutes.email.split(':')[1];
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                setSnackbarMessage("Email address copied to clipboard!");
                setOpenSnackbar(true);
            }).catch(() => {
                setSnackbarMessage("Failed to copy email address.");
                setOpenSnackbar(true);
            });
        } else {
            // Fallback method
            const textArea = document.createElement("textarea");
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setSnackbarMessage("Email address copied to clipboard!");
                setOpenSnackbar(true);
            } catch (err) {
                setSnackbarMessage("Failed to copy email address.");
                setOpenSnackbar(true);
            }
            document.body.removeChild(textArea);
        }
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
                    flexDirection: mobileView ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: mobileView ? 'flex-start' : 'space-evenly',
                    width: '100vw',
                    maxWidth: '100vw',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '1.5vw',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '3vw',
                        },
                    }}
                >
                    &copy; {new Date().getFullYear()} Icarus Development. All rights reserved.
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        cursor: 'pointer',
                        fontSize: '1.5vw',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '3vw',
                        },
                    }}
                    onClick={handleCopyEmail}
                >
                    {contactRoutes.email.split(':')[1]}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    {socialIconsList.slice(0, 4).map((item, index) => FooterItems(item, index))}
                </Box>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        backgroundColor: theme.palette.primary.main,
                        opacity: '0.85 !important',
                        color: theme.palette.common.white,
                        textAlign: 'center',
                        justifyContent: 'center',
                        width: '100px',
                        fontSize: '0.8rem',
                        borderRadius: '4px',
                    },
                }}
            />
        </footer>
    );
}

export default Footer;
