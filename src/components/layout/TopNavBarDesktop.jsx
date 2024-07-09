import {routes} from "../../configs/routesConfig";
import {menuItems} from "../../configs/menuItems";
import {AppBar, Box, Button, Toolbar, Typography, useTheme} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";

// Item icons are for mobile mode only for now
function itemButton(item, index) {
    return (<>

        <Button
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            component={item.route ? Link : 'button'}
            to={item.route ? item.route : undefined}
            onClick={(item.onClickFunction && !item.route)? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                textDecoration: 'none', // Remove underline
                color: 'inherit', // Inherit color from parent
            }}
        >
            <Typography variant="h3" color='primary.contrastText'>
                {item.text}
            </Typography>
        </Button>

    </>);
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
                             maxHeight: '3rem',
                             width: 'auto', // Keep aspect ratio of the logo
                         }}
                    />

                    <Typography variant='h2' component='h1' color='primary.contrastText' sx={{
                        marginLeft: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        Icarus
                    </Typography>
                </Box>

                {/* Map menu icons */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexGrow: 1, // Allow the menu items to grow and shrink with the viewport
                    maxWidth: '100%', // Limit the maximum width to keep it centered
                }}>
                    {menuItems.map((item, index) => itemButton(item, index))}
                </Box>

                {/* Placeholder Box for Right Side Alignment */}
                <Box></Box>

            </Toolbar>
        </AppBar>
    );
}

export default TopNavBarDesktop;