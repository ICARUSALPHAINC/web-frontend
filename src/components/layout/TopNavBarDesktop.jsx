import React, {useState} from "react";
import {routes} from "../../configs/routesConfig";
import {topMenuItems} from "../../configs/menuConfig";
import {AppBar, Box, Button, Toolbar, Typography, Menu, Fade, MenuItem} from "@mui/material";
import logo from "../../assets/logo/logo192.png";
import {Link} from "react-router-dom";

// Menu items that show up in the front of the menu bar
function FrontMenuItems(item, index) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const open = Boolean(anchorEl);
  const subOpen = Boolean(subAnchorEl);

  const handleClick = (event) => {
    if (item.subMenu) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setActiveSubItem(null);
  };

  const handleSubItemClick = (event, sub) => {
    if (sub.subMenu) {
      setSubAnchorEl(event.currentTarget);
      setActiveSubItem(sub);
    } else {
      handleClose();
    }
  };

  const handleSubClose = () => {
    setSubAnchorEl(null);
    setActiveSubItem(null);
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

      {/* Primary Dropdown (e.g. "Games" -> "The Come Up") */}
      {item.subMenu && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#1a1a1a', 
              color: 'white',
              minWidth: '150px',
            }
          }}
        >
          {item.subMenu.map((sub, subIdx) => (
            <MenuItem 
              key={subIdx} 
              onClick={(e) => handleSubItemClick(e, sub)}
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

      {/* Secondary Nested Dropdown (e.g. "The Come Up" -> "Coming Soon") */}
      {activeSubItem?.subMenu && (
        <Menu
          anchorEl={subAnchorEl}
          open={subOpen}
          onClose={handleSubClose}
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          sx={{
            '& .MuiPaper-root': {
              backgroundColor: '#1a1a1a', 
              color: 'white',
              minWidth: '150px',
            }
          }}
        >
          {activeSubItem.subMenu.map((nested, nestedIdx) => (
            <MenuItem 
              key={nestedIdx} 
              onClick={handleClose}
              disabled={nested.disabled}
              sx={{
                '&.Mui-disabled': { opacity: 0.5, color: 'gray' },
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            >
              {nested.text}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}

function TopNavBarDesktop() {
  return (
    <AppBar position='absolute' elevation={0} sx={{ background: 'transparent', width: '100%', top: 0, left: 0, border: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', userSelect: 'none', WebkitUserSelect: 'none' }}>
        <Box component={Link} to={routes.home} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <Box component='img' src={logo} alt="Icarus Logo" sx={{ maxHeight: '3.5rem', width: 'auto', marginRight: '1rem' }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexGrow: 1 }}>
          {topMenuItems.map((item, index) => FrontMenuItems(item, index))}
        </Box>
        <Box sx={{ width: "3.5rem" }} />
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBarDesktop;