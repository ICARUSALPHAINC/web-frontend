import {routes} from "../../configs/routesConfig";
import {bottomMenuItems, topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Drawer, ListItemButton, Toolbar, Typography, useTheme} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

// Menu items that show up at the top of the opened menu burger
function TopMenuItems(item, index) {
    return (
        <ListItemButton
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            key={index}
            component={item.route ? Link : 'button'}
            to={item.route ? item.route : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'mobileAppBarBurgerMenu.listBackground',
                color: 'primary.contrastText',
            }}
        >
            <Typography variant="h3" color='primary.contrastText'>
                {item.text}
            </Typography>
        </ListItemButton>);
}

// Menu items that show up at the end of the opened menu burger
function BottomMenuItems(item, index) {
    return (
        <ListItemButton
            // Make it a link if it's a route, otherwise make it a button with onClickFunction. Render is still button for both.
            key={index}
            component={item.route ? 'a' : 'button'} // Not using links and using 'a' instead so component can open in a new tab instead of current tab
            href={item.route ? item.route : undefined}
            target={item.route ? "_blank" : undefined} // Item opens in new tab instead of current tab
            rel={item.route ? "noopener noreferrer" : undefined} // Item opens in new tab instead of current tab
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
            color="inherit"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'mobileAppBarBurgerMenu.listBackground',
                color: 'primary.contrastText',
            }}
        >
            {item.icon}
        </ListItemButton>
    );
}


function TopNavBarMobile() {
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    function MenuBurger() {
        return (
            <Box role="presentation" onClick={() => setMenuOpen(false)}
                 sx={{
                     width: '15rem',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'space-between',
                     height: '100%',
                     backgroundColor: 'mobileAppBarBurgerMenu.background',
                 }}
            >
                {/* Items at the top */}
                <Box sx={{
                    marginTop: '5rem',
                    '& > *': {
                        padding: '1rem 0rem',
                    }
                }}>
                    {topMenuItems.map((item, index) => TopMenuItems(item, index))}
                </Box>

                {/* Items at the bottom */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '2rem',
                }}>
                    {bottomMenuItems.map((item, index) => BottomMenuItems(item, index))}
                </Box>
            </Box>);
    }

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

                {/* Nav bar left components */}
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

                    <Typography variant='h2' component='h1' color='primary.contrastText' sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        Icarus
                    </Typography>
                </Box>

                {/* Nav Bar right burger menu */}
                <Button variant='null' onClick={() => {
                    setMenuOpen(true);
                }}>
                    <MenuIcon/>
                </Button>
            </Toolbar>
            <Drawer anchor='right' open={menuOpen} onClose={() => setMenuOpen(false)}>
                <MenuBurger/>
            </Drawer>
        </AppBar>
    );
}

export default TopNavBarMobile;