import React, { useState } from "react";
import { routes } from "../../configs/routesConfig";
import { topMenuItems } from "../../configs/menuConfig";
import {
  AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Fade
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo/logo192.png";
import { Link } from "react-router-dom";

function TopNavBarMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  // New state for third-level menu
  const [nestedAnchor, setNestedAnchor] = useState(null);
  const [activeNestedItem, setActiveNestedItem] = useState(null);

  const menuOpen = Boolean(anchorEl);
  const subOpen = Boolean(subAnchor);
  const nestedOpen = Boolean(nestedAnchor);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubAnchor(null);
    setActiveSubMenu(null);
    setNestedAnchor(null);
    setActiveNestedItem(null);
  };

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

  const handleNestedOpen = (event, sub) => {
    if (sub.subMenu) {
      setNestedAnchor(event.currentTarget);
      setActiveNestedItem(sub);
    } else {
      handleMenuClose();
    }
  };

  const handleNestedClose = () => {
    setNestedAnchor(null);
    setActiveNestedItem(null);
  };

  return (
    <AppBar position="absolute" elevation={0} sx={{ background: "transparent", width: "100%", top: 0, left: 0, border: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "transparent", userSelect: "none", WebkitUserSelect: "none" }}>
        
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen} aria-label="menu">
          <MenuIcon fontSize="large" />
        </IconButton>

        <Box component={Link} to={routes.home} sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
          <Box component="img" src={logo} alt="Icarus Logo" sx={{ maxHeight: "3rem", width: "auto" }} />
        </Box>

        <Box sx={{ width: "48px" }} />

        {/* Level 1 Main Menu */}
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose} TransitionComponent={Fade} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} transformOrigin={{ vertical: "top", horizontal: "left" }} sx={{ "& .MuiPaper-root": { backgroundColor: "#1a1a1a", color: "white", minWidth: "220px" } }}>
          {topMenuItems.map((item, index) => (
            <MenuItem key={index} component={item.route ? Link : "div"} to={item.route} onClick={(e) => handleSubOpen(e, item)} sx={{ fontSize: "1rem", fontFamily: "inherit" }}>
              <Typography variant="h6" color="primary.contrastText">{item.text}</Typography>
            </MenuItem>
          ))}
        </Menu>

        {/* Level 2 Sub Menu */}
        {activeSubMenu?.subMenu && (
          <Menu anchorEl={subAnchor} open={subOpen} onClose={handleSubClose} TransitionComponent={Fade} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "left" }} sx={{ "& .MuiPaper-root": { backgroundColor: "#1a1a1a", color: "white", minWidth: "200px" } }}>
            {activeSubMenu.subMenu.map((sub, subIdx) => (
              <MenuItem key={subIdx} component={sub.route ? Link : "div"} to={sub.route} disabled={sub.disabled} onClick={(e) => handleNestedOpen(e, sub)} sx={{ "&.Mui-disabled": { opacity: 0.5, color: "gray" }, fontSize: "0.9rem", fontFamily: "inherit" }}>
                {sub.text}
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* Level 3 Nested Menu ("Coming Soon") */}
        {activeNestedItem?.subMenu && (
          <Menu anchorEl={nestedAnchor} open={nestedOpen} onClose={handleNestedClose} TransitionComponent={Fade} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "left" }} sx={{ "& .MuiPaper-root": { backgroundColor: "#1a1a1a", color: "white", minWidth: "150px" } }}>
            {activeNestedItem.subMenu.map((nested, nIdx) => (
              <MenuItem key={nIdx} disabled={nested.disabled} onClick={handleMenuClose} sx={{ "&.Mui-disabled": { opacity: 0.5, color: "gray" }, fontSize: "0.9rem", fontFamily: "inherit" }}>
                {nested.text}
              </MenuItem>
            ))}
          </Menu>
        )}

      </Toolbar>
    </AppBar>
  );
}

export default TopNavBarMobile;