import {contactRoutes, routes} from "./routesConfig";


// Icon imports only
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import HighlightIcon from '@mui/icons-material/Highlight';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
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
    {text: 'Home', icon: <HomeIcon/>, route: routes.home, },
    {text: 'Projects', icon: <HighlightIcon/>, route: routes.projects, },
    {text: 'Team', icon: <GroupsIcon/>, route: routes.team, },
    {text: 'Contact', icon: <AttachEmailIcon/>, route: routes.contact, },
];

/*
 * Array of objects to be parsed at the bottom of the menu displays, displays at the end / bottom of menu's
 *
 * NecessaryFields: icon, route || onClickFunction
 * Optional fields: noMobile, sx
 *
 * icon - menu's icon
 * route - where to route when clicked
 * onClickFunction (only if no route) - what to do when clicked
 * noMobile - if true, don't render this component in mobile view
 * sx - sx prop to style the text
 */
export const bottomMenuItems = [
    {icon: <XIcon/>, route: contactRoutes.twitter,},
    {icon: <LinkedInIcon/>, route: contactRoutes.linkedIn,},
    {icon: <MailIcon/>, route: contactRoutes.email,},
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