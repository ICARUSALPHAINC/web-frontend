import {routes} from "../../configs/routesConfig";
import {topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography, useTheme} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";


function TopNavBarMobile() {
    const theme = useTheme();
    return (
        <AppBar position="static" sx={{
            background: `${theme.palette.appBar.background}`,
            width: '100vw',
        }}>
            <Toolbar sx={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
            }}>

                {/* Icarus logo & text */}
                <Box
                    component={Link}
                    to={routes.home}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        textDecoration: 'none',  // Remove underline from link
                        color: 'inherit',  // Inherit color from parent
                    }}
                >

                    <Box component='img'
                         src={logo}
                         alt="Icarus Logo"
                         sx={{
                             height: 'auto', // Changed to 100% of parent container's height
                             maxHeight: '5rem',
                             width: 'auto', // Keep aspect ratio of the logo
                         }}
                    />

                    <Typography variant='h2' component='h1' sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        Icarus
                    </Typography>
                </Box>

                {/* Other menu data */}

                <Typography>
                    Mobile mode is yet to be made
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default TopNavBarMobile;