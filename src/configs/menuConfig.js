import { contactRoutes, routes } from "./routesConfig";

import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

export const topMenuItems = [
  { text: "About Us", route: routes.about },
  { 
    text: "Games", 
    subMenu: [
      { 
        text: "The Come-Up", 
        route: null,
        subMenu: [{ text: "Coming Soon", disabled: true }] 
      },
      { 
        text: "Aescension", 
        route: null,
        subMenu: [{ text: "Coming Soon", disabled: true }] 
      },
      { 
        text: "Mimicry", 
        route: null,
        subMenu: [{ text: "Coming Soon", disabled: true }] 
      }
    ] 
  },
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

export const socialIconsList = [
    {icon: <InstagramIcon/>, route: contactRoutes.instagram},
    {icon: <FacebookIcon/>, route: contactRoutes.facebook},
    {icon: <XIcon/>, route: contactRoutes.twitter},
    {icon: <LinkedInIcon/>, route: contactRoutes.linkedIn},
    {icon: <MailIcon/>, route: contactRoutes.email},
];