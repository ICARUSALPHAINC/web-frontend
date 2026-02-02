import {contactRoutes, routes} from "./routesConfig";

// Icon imports only
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

/*
 * Array of objects to be parsed into the menu displays, displays at the start / top of menu's
 *
 * NecessaryFields: text, route || onClickFunction
 * Optional fields: noMobile, sx
 *
 * text - displayed text for menu
 * icon - menu's icon
 * route - where to route when clicked
 * onClickFunction (only if no route) - what to do when clicked
 * noMobile - if true, don't render this component in mobile view
 * sx - sx prop to style the text
 */
export const topMenuItems = [
  //{text: 'Home', icon: <HomeIcon/>, route: routes.home, },
  { text: "About Us", route: routes.about },
  { 
    text: "Games", 
    subMenu: [
      { text: "The Come-Up", route: routes.gameComeUp },
      { text: "Aescension", route: routes.gameAescension },
      { text: "Mimicry", route: routes.gameMimicry }
    ] 
  },
  // Careers usually links to the application form
  { text: "Careers", route: routes.contact }, 
  { text: "Team", route: routes.team },
  { 
    text: "Community", 
    subMenu: [{ text: "Coming Soon", disabled: true }] 
  },
  { 
    text: "Store", 
    subMenu: [{ text: "Coming Soon", disabled: true }] 
  },
];

/*
 * Array of objects to be parsed into list of social media contacts wherever needed.
 *
 * Fields: icon, link
 */
export const socialIconsList = [
    {icon: <InstagramIcon/>, route: contactRoutes.instagram},
    {icon: <FacebookIcon/>, route: contactRoutes.facebook},
    {icon: <XIcon/>, route: contactRoutes.twitter},
    {icon: <LinkedInIcon/>, route: contactRoutes.linkedIn},
    {icon: <MailIcon/>, route: contactRoutes.email},
];