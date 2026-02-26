import React, { useState } from "react";
import { routes } from "../../configs/routesConfig";
import { topMenuItems } from "../../configs/menuConfig";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo/logo192.png";
import { Link } from "react-router-dom";


function TopNavBarMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuOpen = Boolean(anchorEl);
  const subOpen = Boolean(subAnchor);

  /* Main menu handlers */
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchor(null);
    setActiveSubMenu(null);
  };

  /* Submenu handlers */
  const handleSubOpen = (event, item) => {
    if (item.subMenu) {
      setSubAnchor(event.currentTarget);
      setActiveSubMenu(item);
    } else {
      handleMenuClose();
    }
  };

  const handleSubClose = () => {
    setSubAnchor(null);
    setActiveSubMenu(null);
  };


  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        background: "transparent",
        width: "100%",
        top: 0,
        left: 0,
        border: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >

        {/* Left: Hamburger */}
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleMenuOpen}
          aria-label="menu"
        >
          <MenuIcon fontSize="large" />
        </IconButton>


        {/* Center: Logo */}
        <Box
          component={Link}
          to={routes.home}
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Icarus Logo"
            sx={{
              maxHeight: "3rem",
              width: "auto",
            }}
          />
        </Box>


        {/* Right: Spacer */}
        <Box sx={{ width: "48px" }} />


        {/* Main Menu */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#1a1a1a",
              color: "white",
              minWidth: "220px",
            },
          }}
        >
          {topMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              component={item.route ? Link : "div"}
              to={item.route}
              onClick={(e) => handleSubOpen(e, item)}
              sx={{
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            >
              <Typography variant="h6" color="primary.contrastText">
                {item.text}
              </Typography>
            </MenuItem>
          ))}
        </Menu>


        {/* Sub Menu */}
        {activeSubMenu?.subMenu && (
          <Menu
            anchorEl={subAnchor}
            open={subOpen}
            onClose={handleSubClose}
            TransitionComponent={Fade}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#1a1a1a",
                color: "white",
                minWidth: "200px",
              },
            }}
          >
            {activeSubMenu.subMenu.map((sub, subIdx) => (
              <MenuItem
                key={subIdx}
                component={sub.route ? Link : "div"}
                to={sub.route}
                disabled={sub.disabled}
                onClick={handleMenuClose}
                sx={{
                  "&.Mui-disabled": {
                    opacity: 0.5,
                    color: "gray",
                  },
                  fontSize: "0.9rem",
                  fontFamily: "inherit",
                }}
              >
                {sub.text}
              </MenuItem>
            ))}
          </Menu>
        )}

      </Toolbar>
    </AppBar>
  );
}

export default TopNavBarMobile;
