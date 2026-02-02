import {routes} from "../../configs/routesConfig";
import {topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
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
      onClick={item.onClickFunction && !item.route ? item.onClickFunction : undefined} // onClick if route doesn't exist and onClickFunction exists
      color='inherit'
      sx={{
        textDecoration: 'none', // Remove underline
        color: 'inherit', // Inherit color from parent
      }}
    >
      <Typography variant='h3' color='primary.contrastText'>
        {item.text}
      </Typography>
    </Button>
  );
}

function TopNavBarDesktop() {
  return (
    <AppBar
      position='static'
      sx={{
        background: 'transparent',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left: Logo */}
        <Box
          component={Link}
          to={routes.home}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Box
            component='img'
            src={logo}
            alt="Icarus Logo"
            sx={{
              maxHeight: '3.5rem',
              width: 'auto',
              marginRight: '1rem',
            }}
          />
        </Box>

        {/* Center: Menu */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexGrow: 1,
          }}
        >
          {topMenuItems.map((item, index) => FrontMenuItems(item, index))}
        </Box>

        {/* Right: Spacer (keeps center centered) */}
        <Box sx={{ width: "3.5rem" }} />
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBarDesktop;