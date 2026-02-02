import React, {useState} from "react";
import {routes} from "../../configs/routesConfig";
import {topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography, Menu, Fade, MenuItem} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";


// Menu items that show up in the front of the menu bar
function FrontMenuItems(item, index) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (item.subMenu) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box key={index}>
      <Button
        component={item.route ? Link : 'button'}
        to={item.route || undefined}
        onClick={handleClick}
        color='inherit'
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Typography variant='h3' color='primary.contrastText'>
          {item.text}
        </Typography>
      </Button>

      {item.subMenu && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#1a1a1a', // Match your dark theme
              color: 'white',
              minWidth: '150px',
            }
          }}
        >
          {item.subMenu.map((sub, subIdx) => (
            <MenuItem 
              key={subIdx} 
              onClick={handleClose}
              component={sub.route ? Link : 'div'}
              to={sub.route}
              disabled={sub.disabled}
              sx={{
                '&.Mui-disabled': { opacity: 0.5, color: 'gray' },
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            >
              {sub.text}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}

function TopNavBarDesktop() {
  return (
    <AppBar
      position='absolute'
      elevation={0}
      sx={{
        background: 'transparent',
        width: '100%',
        top: 0,
        left: 0,
        border: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          userSelect: 'none',       // Prevents the typing cursor/text highlighting
          WebkitUserSelect: 'none', // Safari/Chrome support
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