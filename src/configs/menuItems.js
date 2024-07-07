import {routes} from "./routesConfig";

// Icon imports only
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import HighlightIcon from '@mui/icons-material/Highlight';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

/*
 * Array of objects to be parsed into menu displays
 *
 * NecessaryFields: text, icon, route || onClickFunction
 * Optional fields: mobileOff, sx
 *
 * text - displayed text for menu
 * icon - menu's icon
 * route - where to route when clicked
 * onClickFunction (only if no route) - what to do when clicked
 * sx - sx prop to style the text
 */
export const menuItems = [
    {text: 'Home', icon: <HomeIcon/>, route: routes.home, },
    {text: 'Team', icon: <GroupsIcon/>, route: routes.team, },
    {text: 'Projects', icon: <HighlightIcon/>, route: routes.projects, },
    {text: 'Contact', icon: <AttachEmailIcon/>, route: routes.contact, },
];