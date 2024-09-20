import {routes} from "../../configs/routesConfig";
import {bottomMenuItems, topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography, useTheme} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";


// Menu items that show up in the front of the menu bar
function FrontMenuItems(item, index) {
    return (
        <Button
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            key={index}
            component={item.route ? Link : 'button'}
            to={item.route ? item.route : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                textDecoration: 'none', // Remove underline
                color: 'inherit', // Inherit color from parent
            }}
        >
            <Typography variant="h3" color='primary.contrastText'>
                {item.text}
            </Typography>
        </Button>);
}

// Item icons are for mobile mode only for now
function EndMenuItems(item, index) {
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

function TopNavBarDesktop() {
    const theme = useTheme();
    return (
        <AppBar position="static" sx={{
            background: `${theme.palette.appBar.background}`,
            width: '100vw',
        }}>
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>


                {/* Components to the left */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
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
                                 maxHeight: '3.5rem',
                                 width: 'auto', // Keep aspect ratio of the logo
                                 marginRight: '1rem',
                             }}
                        />

                    </Box>

                    {/* Map menu icons */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '1rem',
                    }}>
                        {topMenuItems.map((item, index) => FrontMenuItems(item, index))}
                    </Box>
                </Box>


                {/* Components to the right */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.125rem',
                }}>
                    {bottomMenuItems.map((item, index) => EndMenuItems(item, index))}
                </Box>

            </Toolbar>
        </AppBar>
    )
        ;
}

export default TopNavBarDesktop;